import { Logging, Workspace, WorkspaceFolder } from '@aws/language-server-runtimes/server-interface'
import * as fs from 'fs'
import { ArtifactManager, FileMetadata } from '../../artifactManager'
import path = require('path')
import { CodewhispererLanguage } from '../../../../shared/languageDetection'
import { isDirectory } from '../../util'
import { DependencyWatcher } from './DependencyWatcher'

export interface Dependency {
    name: string
    version: string
    path: string
    pathInZipOverride?: string
    size: number
    zipped: boolean
}

export interface BaseDependencyInfo {
    pkgDir: string
    workspaceFolder: WorkspaceFolder
}

export interface DependencyHandlerSharedState {
    isDisposed: boolean
    dependencyUploadedSizeSum: number
}

// Abstract base class for all language dependency handlers
export abstract class LanguageDependencyHandler<T extends BaseDependencyInfo> {
    public language: CodewhispererLanguage
    protected workspace: Workspace
    protected logging: Logging
    protected workspaceFolders: WorkspaceFolder[]
    // key: workspaceFolder, value: {key: dependency name, value: Dependency}
    protected dependencyMap = new Map<WorkspaceFolder, Map<string, Dependency>>()
    protected dependencyUploadedSizeMap = new Map<WorkspaceFolder, number>()
    protected dependencyHandlerSharedState: DependencyHandlerSharedState
    protected dependencyWatchers: Map<string, DependencyWatcher> = new Map<string, DependencyWatcher>()
    protected artifactManager: ArtifactManager
    protected dependenciesFolderName: string
    protected readonly MAX_SINGLE_DEPENDENCY_SIZE: number = 500 * 1024 * 1024 // 500 MB
    protected readonly MAX_WORKSPACE_DEPENDENCY_SIZE: number = 8 * 1024 * 1024 * 1024 // 8 GB
    protected readonly DEPENDENCY_WATCHER_EVENT_BATCH_INTERVAL: number = 1000
    private dependencyZipGeneratedCallback?: (
        workspaceFolder: WorkspaceFolder,
        zip: FileMetadata,
        addWSFolderPathInS3: boolean
    ) => Promise<void>

    constructor(
        language: CodewhispererLanguage,
        workspace: Workspace,
        logging: Logging,
        workspaceFolders: WorkspaceFolder[],
        artifactManager: ArtifactManager,
        dependenciesFolderName: string,
        dependencyHandlerSharedState: DependencyHandlerSharedState
    ) {
        this.language = language
        this.workspace = workspace
        this.logging = logging
        this.workspaceFolders = workspaceFolders
        this.artifactManager = artifactManager
        this.dependenciesFolderName = dependenciesFolderName
        // For each language, the dependency handler initializes dependency map per workspaceSpace folder
        // regardless of knowing whether the workspaceFolder has the language
        // to resolve the race condition when didChangeDependencyPaths LSP and dependency discover may override the dependency map.
        this.workspaceFolders.forEach(workSpaceFolder =>
            this.dependencyMap.set(workSpaceFolder, new Map<string, Dependency>())
        )
        this.dependencyHandlerSharedState = dependencyHandlerSharedState
    }

    /*
     * This function is to discover heuristics of dependency locations of programming languages.
     */
    abstract discover(currentDir: string, workspaceFolder: WorkspaceFolder): boolean

    /*
     * This function is to create dependency map of programming languages. The key is the dependency name
     */
    abstract initiateDependencyMap(folders: WorkspaceFolder[]): void

    /*
     * This function is to setup watchers for dependency files.
     */
    abstract setupWatchers(folders: WorkspaceFolder[]): void

    /**
     * Transform dependency path from LSP to dependency. Java and Python will have different logic to implement
     * @param dependencyName
     * @param dependencyPath
     * @param dependencyMap
     */
    protected abstract transformPathToDependency(
        dependencyName: string,
        dependencyPath: string,
        dependencyMap: Map<string, Dependency>
    ): void

    public onDependencyZipGenerated(
        callback: (workspaceFolder: WorkspaceFolder, zip: FileMetadata, addWSFolderPathInS3: boolean) => Promise<void>
    ): void {
        this.dependencyZipGeneratedCallback = callback
    }

    private async uploadDependencyZip(workspaceFolder: WorkspaceFolder, zip: FileMetadata): Promise<void> {
        // If language is JavaScript or TypeScript, we want to preserve the workspaceFolder path in S3 path
        const addWSFolderPathInS3 = this.language === 'javascript' || this.language === 'typescript'
        if (this.dependencyZipGeneratedCallback) {
            await this.dependencyZipGeneratedCallback(workspaceFolder, zip, addWSFolderPathInS3)
        }
    }

    /**
     * Update dependency map based on didChangeDependencyPaths LSP. Javascript and Typescript will not use LSP so no need to implement this method
     * @param paths
     * @param workspaceRoot
     */
    updateDependencyMapBasedOnLSP(paths: string[], workspaceFolder: WorkspaceFolder): Dependency[] {
        const dependencyMap = new Map<string, Dependency>()
        paths.forEach((dependencyPath: string) => {
            // basename of the path should be the dependency name
            const dependencyName = path.basename(dependencyPath)
            this.transformPathToDependency(dependencyName, dependencyPath, dependencyMap)
        })

        return this.compareAndUpdateDependencyMap(workspaceFolder, dependencyMap)
    }

    async zipDependencyMap(folders: WorkspaceFolder[]): Promise<void> {
        // Process each workspace folder sequentially
        for (const [workspaceFolder, correspondingDependencyMap] of this.dependencyMap) {
            if (this.dependencyHandlerSharedState.isDisposed) {
                return
            }
            // Check if the workspace folder is in the provided folders
            if (!folders.includes(workspaceFolder)) {
                continue
            }
            await this.zipAndUploadDependenciesByChunk([...correspondingDependencyMap.values()], workspaceFolder)
        }
    }

    async zipAndUploadDependenciesByChunk(
        dependencyList: Dependency[],
        workspaceFolder: WorkspaceFolder
    ): Promise<void> {
        const MAX_CHUNK_SIZE_BYTES = 100 * 1024 * 1024 // 100MB per chunk
        // Process each workspace folder sequentially
        let chunkIndex = 0
        let currentChunkSize = 0
        let currentChunk: Dependency[] = []
        for (const dependency of dependencyList) {
            if (this.dependencyHandlerSharedState.isDisposed) {
                return
            }
            // If adding this dependency would exceed the chunk size limit,
            // process the current chunk first
            if (currentChunkSize + dependency.size > MAX_CHUNK_SIZE_BYTES && currentChunk.length > 0) {
                // Process current chunk
                this.logging.log(
                    `Under ${workspaceFolder.name}, #${chunkIndex} chunk containing ${this.language} dependencies with size: ${currentChunkSize} has reached chunk limit. Start to process...`
                )
                await this.processChunk(currentChunk, workspaceFolder, chunkIndex)

                // Reset chunk
                currentChunk = []
                currentChunkSize = 0
                chunkIndex++

                // Add a small delay between chunks
                await new Promise(resolve => setTimeout(resolve, 100))
            }
            // Add dependency to current chunk. If the dependency has been zipped, skip it.
            if (!this.isDependencyZipped(dependency.name, workspaceFolder)) {
                if (!this.validateSingleDependencySize(workspaceFolder, dependency)) {
                    this.logging.warn(`Dependency ${dependency.name} size exceeds the limit.`)
                    continue
                }
                if (!this.validateWorkspaceDependencySize(workspaceFolder)) {
                    this.logging.warn(`Workspace ${workspaceFolder.name} dependency size exceeds the limit.`)
                    break
                }
                currentChunk.push(dependency)
                currentChunkSize += dependency.size
                this.dependencyUploadedSizeMap.set(
                    workspaceFolder,
                    (this.dependencyUploadedSizeMap.get(workspaceFolder) || 0) + dependency.size
                )
                this.dependencyHandlerSharedState.dependencyUploadedSizeSum += dependency.size
                // Mark this dependency that has been zipped
                dependency.zipped = true
                this.dependencyMap.get(workspaceFolder)?.set(dependency.name, dependency)
            }
        }
        // Process any remaining dependencies in the last chunk
        if (currentChunk.length > 0) {
            await this.processChunk(currentChunk, workspaceFolder, chunkIndex)
        }
    }

    private async processChunk(
        chunk: Array<Dependency>,
        workspaceFolder: WorkspaceFolder,
        chunkIndex: number
    ): Promise<void> {
        let fileMetadataList: FileMetadata[] = []
        for (const dependency of chunk) {
            try {
                if (fs.existsSync(dependency.path)) {
                    const fileMetadata = await this.artifactManager.getFileMetadata(
                        workspaceFolder,
                        dependency.path,
                        this.language,
                        dependency.pathInZipOverride || path.basename(dependency.path)
                    )
                    fileMetadataList.push(...fileMetadata)
                }
            } catch (error) {
                this.logging.warn(`Error processing dependency ${dependency.name}: ${error}`)
            }
        }
        if (fileMetadataList.length > 0) {
            try {
                const singleZip = await this.artifactManager.createZipForDependencies(
                    workspaceFolder,
                    this.language,
                    fileMetadataList,
                    this.dependenciesFolderName,
                    chunkIndex
                )
                const totalChunkSize = chunk.reduce((sum, dep) => sum + dep.size, 0)
                // Log chunk statistics
                this.logging.log(
                    `Created a zip for chunk #${chunkIndex} containing ${chunk.length} ${this.language} dependencies with total size: ${(
                        totalChunkSize /
                        (1024 * 1024)
                    ).toFixed(2)}MB under ${workspaceFolder.name}`
                )
                await this.uploadDependencyZip(workspaceFolder, singleZip)
            } catch (error) {
                this.logging.warn(`Error creating dependency zip for workspace ${workspaceFolder.uri}: ${error}`)
            }
        }
    }

    /*
     * This function is to generate dependency map of programming languages. The key is the dependency name
     */
    protected abstract generateDependencyMap(dependencyInfo: T, dependencyMap: Map<string, Dependency>): void

    protected compareAndUpdateDependencyMap(
        workspaceFolder: WorkspaceFolder,
        updatedDependencyMap: Map<string, Dependency>
    ): Dependency[] {
        const changes = {
            added: [] as Dependency[],
            updated: [] as Dependency[],
        }

        let currentDependencyMap = this.dependencyMap.get(workspaceFolder)
        // If the dependency map doesn't exist, create a new one
        if (!currentDependencyMap) {
            currentDependencyMap = new Map<string, Dependency>()
            this.dependencyMap.set(workspaceFolder, currentDependencyMap)
        }
        // Check for added and updated dependencies
        updatedDependencyMap.forEach((newDep, name) => {
            const existingDependency = currentDependencyMap.get(name)
            if (!existingDependency) {
                changes.added.push(newDep)
            } else if (existingDependency.version !== newDep.version) {
                changes.updated.push(newDep)
            }
        })

        // log all added and updated changes
        if (changes.added.length > 0) {
            this.logging.log(`Added ${changes.added.length} new dependencies`)
        }
        if (changes.updated.length > 0) {
            this.logging.log(`Updated ${changes.updated.length} dependencies`)
        }

        // Update the dependency map
        updatedDependencyMap.forEach((newDep, name) => {
            this.dependencyMap.get(workspaceFolder)?.set(name, newDep)
        })

        return [...changes.added, ...changes.updated]
    }

    private validateSingleDependencySize(workspaceFolder: WorkspaceFolder, dependency: Dependency): boolean {
        return dependency.size < this.MAX_SINGLE_DEPENDENCY_SIZE
    }

    /**
     * This validation will calculate how such of size of dependencies uploaded per workspace.
     *
     * This validation is only used for new dependency being uploaded.
     * Existing dependencies will be uploaded as long as single size didn't exceed
     *
     * The dependency map doesn't get updated when dependency is deleted so that this validation may be
     * false positive when large of dependencies is deleted.
     * However, everytime flare server restarts, this dependency map will be initialized.
     */
    private validateWorkspaceDependencySize(workspaceFolder: WorkspaceFolder): boolean {
        if (this.MAX_WORKSPACE_DEPENDENCY_SIZE < this.dependencyHandlerSharedState.dependencyUploadedSizeSum) {
            return false
        }
        return true
    }

    dispose(): void {
        this.dependencyMap.clear()
        this.dependencyUploadedSizeMap.clear()
        this.dependencyWatchers.forEach(watcher => watcher.dispose())
        this.dependencyWatchers.clear()
    }

    disposeWorkspaceFolder(workspaceFolder: WorkspaceFolder): void {
        this.dependencyMap.delete(workspaceFolder)
        this.dependencyHandlerSharedState.dependencyUploadedSizeSum -=
            this.dependencyUploadedSizeMap.get(workspaceFolder) || 0
        this.dependencyUploadedSizeMap.delete(workspaceFolder)
        this.disposeWatchers(workspaceFolder)
        this.disposeDependencyInfo(workspaceFolder)
    }

    /**
     * Dispose watchers for one workspace folder.
     * This needs to be implemented in individual language because watcher are mapped with watched folder paths.
     * @param workspaceFolder
     */
    abstract disposeWatchers(workspaceFolder: WorkspaceFolder): void

    abstract disposeDependencyInfo(workspaceFolder: WorkspaceFolder): void

    // For synchronous version if needed:
    protected getDirectorySize(directoryPath: string): number {
        if (!isDirectory(directoryPath)) {
            return fs.statSync(directoryPath).size
        }
        let totalSize = 0
        try {
            const files = fs.readdirSync(directoryPath)

            for (const file of files) {
                const filePath = path.join(directoryPath, file)
                const stats = fs.statSync(filePath)
                totalSize += this.getDirectorySize(filePath)
            }

            return totalSize
        } catch (error) {
            throw new Error(`Error calculating directory size: ${error}`)
        }
    }

    protected isDependencyZipped(dependencyName: string, workspaceFolder: WorkspaceFolder): boolean | undefined {
        return this.dependencyMap.get(workspaceFolder)?.get(dependencyName)?.zipped
    }

    markAllDependenciesAsUnZipped(): void {
        this.dependencyMap.forEach(correspondingDependencyMap => {
            correspondingDependencyMap.forEach(dependency => {
                dependency.zipped = false
            })
        })
    }
}
