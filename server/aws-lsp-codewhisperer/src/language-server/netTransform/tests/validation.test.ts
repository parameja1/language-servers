import { expect } from 'chai'
import { StartTransformRequest, TransformProjectMetadata } from '../models'
import { isProject, isSolution, validateProject, validateSolution } from '../validation'
import { supportedProjects, unsupportedViewComponents } from '../resources/SupportedProjects'
import mock = require('mock-fs')
import { Logging } from '@aws/language-server-runtimes/server-interface'
import { stubInterface } from 'ts-sinon'

const sampleStartTransformRequest: StartTransformRequest = {
    SolutionRootPath: '',
    SolutionFilePath: 'sample.sln',
    SelectedProjectPath: 'test.csproj',
    ProgramLanguage: '',
    TargetFramework: '',
    SolutionConfigPaths: [],
    ProjectMetadata: [],
    TransformNetStandardProjects: false,
    EnableRazorViewTransform: false,
    EnableWebFormsTransform: false,
    command: '',
    PackageReferences: [],
}
const mockedLogging = stubInterface<Logging>()

describe('Test validation functionality', () => {
    it('should return true when selectedProjectPath is a valid csproj', () => {
        let mockStartTransformationRequest: StartTransformRequest = sampleStartTransformRequest
        mockStartTransformationRequest.SelectedProjectPath = 'test.csproj'
        expect(isProject(mockStartTransformationRequest)).to.equal(true)
    })

    it('should return false when selectedProjectPath is not a valid csproj', () => {
        let mockStartTransformationRequest: StartTransformRequest = sampleStartTransformRequest
        mockStartTransformationRequest.SelectedProjectPath = 'test.sln'
        expect(isProject(mockStartTransformationRequest)).to.equal(false)
    })

    it('should return true when selectedProjectPath is a valid sln', () => {
        let mockStartTransformationRequest: StartTransformRequest = sampleStartTransformRequest
        mockStartTransformationRequest.SelectedProjectPath = 'test.sln'
        expect(isSolution(mockStartTransformationRequest)).to.equal(true)
    })

    it('should return false when selectedProjectPath is not a valid sln', () => {
        let mockStartTransformationRequest: StartTransformRequest = sampleStartTransformRequest
        mockStartTransformationRequest.SelectedProjectPath = 'test.csproj'
        expect(isSolution(mockStartTransformationRequest)).to.equal(false)
    })

    it('should return true when project is a supported type', () => {
        let mockStartTransformationRequest: StartTransformRequest = sampleStartTransformRequest
        const mockProjectMeta = {
            Name: '',
            ProjectTargetFramework: '',
            ProjectPath: 'test.csproj',
            SourceCodeFilePaths: [],
            ProjectLanguage: '',
            ProjectType: 'AspNetCoreMvc',
            ExternalReferences: [],
        }
        mockStartTransformationRequest.ProjectMetadata.push(mockProjectMeta)

        expect(validateProject(mockStartTransformationRequest, mockedLogging)).to.equal(true)
    })

    it('should return false when project is not a supported type', () => {
        let mockStartTransformationRequest: StartTransformRequest = sampleStartTransformRequest
        const mockProjectMeta = {
            Name: '',
            ProjectTargetFramework: '',
            ProjectPath: 'test.csproj',
            SourceCodeFilePaths: [],
            ProjectLanguage: '',
            ProjectType: 'not supported',
            ExternalReferences: [],
        }
        mockStartTransformationRequest.ProjectMetadata = []
        mockStartTransformationRequest.ProjectMetadata.push(mockProjectMeta)

        expect(validateProject(mockStartTransformationRequest, mockedLogging)).to.equal(false)
    })

    it('should return false when there is no project path that is the same as the selected project path', () => {
        let mockStartTransformationRequest: StartTransformRequest = sampleStartTransformRequest
        const mockProjectMeta = {
            Name: '',
            ProjectTargetFramework: '',
            ProjectPath: 'different.csproj',
            SourceCodeFilePaths: [],
            ProjectLanguage: '',
            ProjectType: 'AspNetCoreMvc',
            ExternalReferences: [],
        }
        mockStartTransformationRequest.ProjectMetadata = []
        mockStartTransformationRequest.ProjectMetadata.push(mockProjectMeta)

        expect(validateProject(mockStartTransformationRequest, mockedLogging)).to.equal(false)
    })

    // New tests for AspNetWebForms validation
    it('should return true when project is AspNetWebForms type', () => {
        let mockStartTransformationRequest: StartTransformRequest = sampleStartTransformRequest
        const mockProjectMeta = {
            Name: '',
            ProjectTargetFramework: '',
            ProjectPath: 'test.csproj',
            SourceCodeFilePaths: [],
            ProjectLanguage: '',
            ProjectType: 'AspNetWebForms',
            ExternalReferences: [],
        }
        mockStartTransformationRequest.ProjectMetadata = []
        mockStartTransformationRequest.ProjectMetadata.push(mockProjectMeta)

        expect(validateProject(mockStartTransformationRequest, mockedLogging)).to.equal(true)
    })

    it('should not include AspNetWebForms in unsupported projects list', () => {
        let mockStartTransformationRequest: StartTransformRequest = sampleStartTransformRequest

        // Add a supported project
        const supportedProjectMeta = {
            Name: 'Supported',
            ProjectTargetFramework: '',
            ProjectPath: 'supported.csproj',
            SourceCodeFilePaths: [],
            ProjectLanguage: '',
            ProjectType: 'AspNetCoreMvc',
            ExternalReferences: [],
        }

        // Add an unsupported project
        const unsupportedProjectMeta = {
            Name: 'Unsupported',
            ProjectTargetFramework: '',
            ProjectPath: 'unsupported.csproj',
            SourceCodeFilePaths: [],
            ProjectLanguage: '',
            ProjectType: 'UnsupportedType',
            ExternalReferences: [],
        }

        // Add an AspNetWebForms project
        const webFormsProjectMeta = {
            Name: 'WebForms',
            ProjectTargetFramework: '',
            ProjectPath: 'webforms.csproj',
            SourceCodeFilePaths: [],
            ProjectLanguage: '',
            ProjectType: 'AspNetWebForms',
            ExternalReferences: [],
        }

        mockStartTransformationRequest.ProjectMetadata = [
            supportedProjectMeta,
            unsupportedProjectMeta,
            webFormsProjectMeta,
        ]

        const unsupportedProjects = validateSolution(mockStartTransformationRequest)

        // Should only contain the unsupported project, not the AspNetWebForms project
        expect(unsupportedProjects).to.have.lengthOf(1)
        expect(unsupportedProjects[0]).to.equal('unsupported.csproj')
        expect(unsupportedProjects).to.not.include('webforms.csproj')
    })
})
