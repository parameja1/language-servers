:robot: I have created a release *beep* *boop*
---


<details><summary>chat-client: 0.1.32</summary>

## [0.1.32](https://github.com/parameja1/language-servers/compare/chat-client/v0.1.31...chat-client/v0.1.32) (2025-08-08)


### Features

* add client side ide diagnostics to telemetry event ([#1768](https://github.com/parameja1/language-servers/issues/1768)) ([d08fc6c](https://github.com/parameja1/language-servers/commit/d08fc6cccb9238cef9c2ba485e116c0516839537))
* add conversation compaction ([#1895](https://github.com/parameja1/language-servers/issues/1895)) ([8bb7144](https://github.com/parameja1/language-servers/commit/8bb7144e45cfce6cc9337fd49de7edbee61105b8))
* adding mcp servers feature to the language-server ([#1544](https://github.com/parameja1/language-servers/issues/1544)) ([f37bf5f](https://github.com/parameja1/language-servers/commit/f37bf5f91921d7611c124de6d54dd6ec653038c6))
* **amazonq:** add two more tips for the did you know section ([#2063](https://github.com/parameja1/language-servers/issues/2063)) ([9949c6d](https://github.com/parameja1/language-servers/commit/9949c6dd81c56b5ea82563310da2eaee4d00a059))
* **amazonq:** enable show logs feature ([#1947](https://github.com/parameja1/language-servers/issues/1947)) ([86ea83d](https://github.com/parameja1/language-servers/commit/86ea83dd53b447f6decccf16559b76f4989ea712))
* **amazonq:** enable sonnet 4 for fra region ([#2069](https://github.com/parameja1/language-servers/issues/2069)) ([3a4b8df](https://github.com/parameja1/language-servers/commit/3a4b8df981b2c3b0532360a11472169fffec7924))
* **amazonq:** migrating / agents to q agentic chat ([#1799](https://github.com/parameja1/language-servers/issues/1799)) ([559b2ba](https://github.com/parameja1/language-servers/commit/559b2baec7da7b8fffb697990e3b249ffffcb85c))
* **amazonq:** model throttling message as card instead of chat message ([#1657](https://github.com/parameja1/language-servers/issues/1657)) ([7ee1f2a](https://github.com/parameja1/language-servers/commit/7ee1f2ac0bdaa9f73fb63fc6d20d0de6d7b07523))
* **amazonq:** pinned context and rules ([#1663](https://github.com/parameja1/language-servers/issues/1663)) ([25e7a5a](https://github.com/parameja1/language-servers/commit/25e7a5ab8b6630525a4fd6acc0524f67f00af817))
* **amazonq:** read and validate the images as context ([#1716](https://github.com/parameja1/language-servers/issues/1716)) ([7a5d41f](https://github.com/parameja1/language-servers/commit/7a5d41f3cff7309d04d952fbb5dc063fb8658a06))
* **amazonq:** redirect /review, rename CodeReview tool, emit metrics, modify prompts ([#1964](https://github.com/parameja1/language-servers/issues/1964)) ([ad8e2db](https://github.com/parameja1/language-servers/commit/ad8e2db77e34f369fef9af71cdda2d3522f555c6))
* **amazonq:** revert auto-approve ([#2002](https://github.com/parameja1/language-servers/issues/2002)) ([c8181f7](https://github.com/parameja1/language-servers/commit/c8181f7a1de224dfcc7a77cd0bfc905fa1018372))
* **amazonq:** telemetry for chat history and export ([#1314](https://github.com/parameja1/language-servers/issues/1314)) ([aaa08a4](https://github.com/parameja1/language-servers/commit/aaa08a4f29ac34f85ec9badf975d6e2e8d114627))
* **chat-client:** add auto-approve (trust mode) for built-in tools ([#1949](https://github.com/parameja1/language-servers/issues/1949)) ([f17b631](https://github.com/parameja1/language-servers/commit/f17b631d9e06371a11ef8e9cb1413762fb51a143))
* **chat-client:** add built-in tool permission and enable auto-approve ([#1890](https://github.com/parameja1/language-servers/issues/1890)) ([03b59c8](https://github.com/parameja1/language-servers/commit/03b59c8fba58db0f6b6c387cf5d53227c3f54673))
* **chat-client:** add shortcut for stop/reject/run commands ([#1932](https://github.com/parameja1/language-servers/issues/1932)) ([087f338](https://github.com/parameja1/language-servers/commit/087f3387ba736e92d014274e195f7ef76e377f1e))
* **chat-client:** add stringOverrides to createChat config ([#1847](https://github.com/parameja1/language-servers/issues/1847)) ([89f85ff](https://github.com/parameja1/language-servers/commit/89f85ff6c676eb30d2cb6bc3368676b0d0913bac))
* **chat-client:** handle keyboard shortcut for run/reject/stop shell commands and tooltips ([#1885](https://github.com/parameja1/language-servers/issues/1885)) ([f8e9461](https://github.com/parameja1/language-servers/commit/f8e94615b5ce8a3f4bf8837627fa4816a09cbef2))
* Implement dynamic model selection based on extension capabilities and improve error handling ([#1737](https://github.com/parameja1/language-servers/issues/1737)) ([97db5d8](https://github.com/parameja1/language-servers/commit/97db5d8dd0a2c8214d37429375ec57aa68a462ee))
* model selection for agentic chat ([#1294](https://github.com/parameja1/language-servers/issues/1294)) ([10abd04](https://github.com/parameja1/language-servers/commit/10abd041d340b1b6fe6adad81cc1f6bd1610826e))
* **q:** builderid "paid tier" [#1197](https://github.com/parameja1/language-servers/issues/1197) ([d25bcb6](https://github.com/parameja1/language-servers/commit/d25bcb696572dd52938253bd15d838b1a0f57d68))
* remove auto model selection option ([#1548](https://github.com/parameja1/language-servers/issues/1548)) ([71fc801](https://github.com/parameja1/language-servers/commit/71fc80165a7e987ca4d103f40aa93980bcd015da))
* support http transport without authorization for MCP ([97e806c](https://github.com/parameja1/language-servers/commit/97e806ce7ea5e5be1fd60c4a4d9a54cf76c8f8cb))
* support listAvailableModels server request ([#1808](https://github.com/parameja1/language-servers/issues/1808)) ([9f1ddb3](https://github.com/parameja1/language-servers/commit/9f1ddb327778dba6da49337b79c5fef19023b52d))
* support per region model selection ([#1683](https://github.com/parameja1/language-servers/issues/1683)) ([0b81b37](https://github.com/parameja1/language-servers/commit/0b81b37c15a8c407ec04904abb4bdccf829aa1c1))
* update list of models and set default to 4 ([#1659](https://github.com/parameja1/language-servers/issues/1659)) ([1991658](https://github.com/parameja1/language-servers/commit/19916584d3f46049d30f0c23b41c3857a07bc622))


### Bug Fixes

* add more detailed log when mcp server initialize failed and tooltip change ([#1594](https://github.com/parameja1/language-servers/issues/1594)) ([cdab4d6](https://github.com/parameja1/language-servers/commit/cdab4d6b59c4ded425822063cb568c4b831402e8))
* Add persistent pair programming mode setting with database storage and UI synchronization([#1757](https://github.com/parameja1/language-servers/issues/1757)) ([ba683cc](https://github.com/parameja1/language-servers/commit/ba683cc6dc120863350025a4a082ecf3a95b5905))
* add visibleName property to fix empty directory name when the directory ends with a slash ([#1302](https://github.com/parameja1/language-servers/issues/1302)) ([f6d573c](https://github.com/parameja1/language-servers/commit/f6d573cc8e6b23cfdcfd9baa5a5c8e705579b23c))
* **agenticChat:** UX fixes for MCP ([#1661](https://github.com/parameja1/language-servers/issues/1661)) ([bbdb4b4](https://github.com/parameja1/language-servers/commit/bbdb4b451352af50a914df684d7654686142a13b))
* **amazonq:** 500k max input limit in user input box. Align payload prompt with user typed prompt. ([#1325](https://github.com/parameja1/language-servers/issues/1325)) ([3338cc1](https://github.com/parameja1/language-servers/commit/3338cc1b5dcfd375385d7db2fa693870687dba8a))
* **amazonq:** add slight delay to print chat string after card ([#1800](https://github.com/parameja1/language-servers/issues/1800)) ([c7d08ab](https://github.com/parameja1/language-servers/commit/c7d08abd7cac95b5aad83fe93157a815522338ac))
* **amazonq:** allow taking .jpg file as image context, add image cont& ([#1814](https://github.com/parameja1/language-servers/issues/1814)) ([4d36fa4](https://github.com/parameja1/language-servers/commit/4d36fa4a0a04692dba720bc0288c6cee7f45a1fc))
* **amazonq:** change the icon for error and reduce the count ([#1789](https://github.com/parameja1/language-servers/issues/1789)) ([758d31c](https://github.com/parameja1/language-servers/commit/758d31c186b163712312fdffb04ee692cfe11de8))
* **amazonq:** change the icon for error and reduce the count ([#1789](https://github.com/parameja1/language-servers/issues/1789)) ([758d31c](https://github.com/parameja1/language-servers/commit/758d31c186b163712312fdffb04ee692cfe11de8))
* **amazonq:** change to use promptStickyCard to show image verification notification ([#1904](https://github.com/parameja1/language-servers/issues/1904)) ([caaefef](https://github.com/parameja1/language-servers/commit/caaefef2c9b2af66840ec2f7ccabe9bf937c2983))
* **amazonq:** fix for mcp server unnecessary refresh from file watchers ([#1933](https://github.com/parameja1/language-servers/issues/1933)) ([208909b](https://github.com/parameja1/language-servers/commit/208909b55ecda40ff8d412b2b3be890eccee70bc))
* **amazonq:** fix the issue that invalid image notification always show ([#2007](https://github.com/parameja1/language-servers/issues/2007)) ([ceed762](https://github.com/parameja1/language-servers/commit/ceed762ace5f94cb0e0a7978eb6c4894bc11ce42))
* **amazonq:** fix the order of publishing the chat stop ack message ([#1761](https://github.com/parameja1/language-servers/issues/1761)) ([20c2263](https://github.com/parameja1/language-servers/commit/20c22638a34d557fc755e33aed798abc1ce3a6d9))
* **amazonq:** fix to add disable/enable feature back to mcp servers ([#2052](https://github.com/parameja1/language-servers/issues/2052)) ([c03e017](https://github.com/parameja1/language-servers/commit/c03e017b9ccbbbb9c80a3c3afd5da38a50bd6cff))
* **amazonq:** improve cross theme support ([#2036](https://github.com/parameja1/language-servers/issues/2036)) ([002a255](https://github.com/parameja1/language-servers/commit/002a255c28ea07ca6623dbd074101cbc6082ceb8))
* **amazonq:** improve welcome screen and enable tips ([#2035](https://github.com/parameja1/language-servers/issues/2035)) ([ac00b94](https://github.com/parameja1/language-servers/commit/ac00b94df45c2bba0666423c937757fad4db95cc))
* **amazonq:** refactor the welcome screen to make it look better ([#2027](https://github.com/parameja1/language-servers/issues/2027)) ([1f7c608](https://github.com/parameja1/language-servers/commit/1f7c608ba2f89c8b0675e62451e27d2dc547613c))
* **amazonq:** revert commit f17b631d9e06371a11ef8e9cb1413762fb51a143 ([#1965](https://github.com/parameja1/language-servers/issues/1965)) ([8c2cab6](https://github.com/parameja1/language-servers/commit/8c2cab6995922c96030b5bbdf3cbbdef7eadd7c2))
* **amazonq:** update mcp and persona config to agent config ([#1897](https://github.com/parameja1/language-servers/issues/1897)) ([530977f](https://github.com/parameja1/language-servers/commit/530977f8c73c7946a0205f02014248d71b4b1fe0))
* **amazonq:** updated stopping message to a better string for new chat ([#1765](https://github.com/parameja1/language-servers/issues/1765)) ([814bff8](https://github.com/parameja1/language-servers/commit/814bff848b970ec0192e36b8764c9cb08508f6ce))
* **amazonq:** use config to render the overlay ([#1851](https://github.com/parameja1/language-servers/issues/1851)) ([f5c2038](https://github.com/parameja1/language-servers/commit/f5c2038c090f9bb66b3cbd7e31f4d26c37943aeb))
* change model unavailable message ([#1711](https://github.com/parameja1/language-servers/issues/1711)) ([d4e1298](https://github.com/parameja1/language-servers/commit/d4e1298a5e00b2c3466ba1378aaaa28b89d75fb9))
* **chat-client:** fix bug where pair programmer mode option update was not stored properly ([#1400](https://github.com/parameja1/language-servers/issues/1400)) ([bcdd9a2](https://github.com/parameja1/language-servers/commit/bcdd9a2b02a1e37aa83ac93ceef93d84a99951de))
* **chat-client:** revert for add built-in tool permission and enable auto-approve ([#1890](https://github.com/parameja1/language-servers/issues/1890)) ([#1900](https://github.com/parameja1/language-servers/issues/1900)) ([34b41b8](https://github.com/parameja1/language-servers/commit/34b41b8f87c21d2ee6b98643339dbdfa71efcb77))
* **chat-client:** revert for amazon q keyboard shortcuts feature ([#1901](https://github.com/parameja1/language-servers/issues/1901)) ([522f8de](https://github.com/parameja1/language-servers/commit/522f8de6dba8dfa9b4363934cd7fcea905add1ce))
* correct icon for mcp button ([#1605](https://github.com/parameja1/language-servers/issues/1605)) ([a2e7d57](https://github.com/parameja1/language-servers/commit/a2e7d571eafb3767471b401242ac8a25b41961cd))
* enable test flag for amazon q ui testing ([#2046](https://github.com/parameja1/language-servers/issues/2046)) ([f18ea96](https://github.com/parameja1/language-servers/commit/f18ea96c1e5cd9b93974a047d7f2bb1aba0d9436))
* image context drag and drop fix on windows ([#1837](https://github.com/parameja1/language-servers/issues/1837)) ([14df236](https://github.com/parameja1/language-servers/commit/14df23633138d9b84875fba79a3eaf2d18dca8ce))
* imagecontext image name bug, mutliple images in pinned context ([#1834](https://github.com/parameja1/language-servers/issues/1834)) ([27d60ab](https://github.com/parameja1/language-servers/commit/27d60ab5f5249635a9e73be1ee96ecb820133f9a))
* intermediate file card does not have border ([#1734](https://github.com/parameja1/language-servers/issues/1734)) ([24e0497](https://github.com/parameja1/language-servers/commit/24e049705ce4ab982700839d012afb35786d8e4f))
* mcp server list highlighting ([#1627](https://github.com/parameja1/language-servers/issues/1627)) ([e3c7f2c](https://github.com/parameja1/language-servers/commit/e3c7f2c529726b88a811c701e7ad8514a3abe4b2))
* open initial tab using mynahUI defaults instead of waiting for ChatOptions ([#1322](https://github.com/parameja1/language-servers/issues/1322)) ([87178a5](https://github.com/parameja1/language-servers/commit/87178a554f23decb45fbdf26f067d0d9801f91a0))
* **paidtier:** Upgrade success message is unreliable ([#1602](https://github.com/parameja1/language-servers/issues/1602)) ([e0b274f](https://github.com/parameja1/language-servers/commit/e0b274ffee2e091e09574de03fe38e0a234e2f6e))
* permission check ux changes ([#1290](https://github.com/parameja1/language-servers/issues/1290)) ([170113f](https://github.com/parameja1/language-servers/commit/170113f97eccf7827cfc72da33d9dc9c7e4afb3f))
* prevent muting messages with completed status ([#1557](https://github.com/parameja1/language-servers/issues/1557)) ([527a373](https://github.com/parameja1/language-servers/commit/527a373cc0b7c2c253d700af002d4e6bc7fdb887))
* remove @ mention in placeholder q chat text if agentic mode not available ([#1311](https://github.com/parameja1/language-servers/issues/1311)) ([28f84fc](https://github.com/parameja1/language-servers/commit/28f84fc82fd5e55ec1cdc61d1bcca6e4e447b12f))
* remove disclaimer message ([#1884](https://github.com/parameja1/language-servers/issues/1884)) ([0845eed](https://github.com/parameja1/language-servers/commit/0845eeda8d73ed1df3b8801e79dad1ddd7016781))
* remove gradient from create prompt button ([#1475](https://github.com/parameja1/language-servers/issues/1475)) ([2f34d43](https://github.com/parameja1/language-servers/commit/2f34d438b08ced84c0a17303fd22d7f750c64dfd))
* replace cancel with stop ([#1935](https://github.com/parameja1/language-servers/issues/1935)) ([2f51923](https://github.com/parameja1/language-servers/commit/2f51923f9d3497469c70162235482b569e2d796e))
* replace thinking with working and replace stop with cancel ([#1922](https://github.com/parameja1/language-servers/issues/1922)) ([371e731](https://github.com/parameja1/language-servers/commit/371e731545f7572d3356d061cd8b94db35e4c333))
* Revert stop text align ([#1397](https://github.com/parameja1/language-servers/issues/1397)) ([439e859](https://github.com/parameja1/language-servers/commit/439e8597b5ce8ad052ab571a1a156044f8862206))
* show server name when deleting ([#1593](https://github.com/parameja1/language-servers/issues/1593)) ([a2d495a](https://github.com/parameja1/language-servers/commit/a2d495a5799f078b455869058bb3a546974302ec))
* stop buttom work expected ([#1307](https://github.com/parameja1/language-servers/issues/1307)) ([06c752e](https://github.com/parameja1/language-servers/commit/06c752e1dee106be73daa73f336213aad5413e67))
* stop chat response first when close tab ([#1292](https://github.com/parameja1/language-servers/issues/1292)) ([3733b43](https://github.com/parameja1/language-servers/commit/3733b433a771ece77ae83f55c8e8e3bd13dcd96b))
* Stop text align ([#1321](https://github.com/parameja1/language-servers/issues/1321)) ([0f522a1](https://github.com/parameja1/language-servers/commit/0f522a17004174d29955bf70c304ad9ca39df623))
* undo buttom not dimmed the card ([#1276](https://github.com/parameja1/language-servers/issues/1276)) ([49bd9c9](https://github.com/parameja1/language-servers/commit/49bd9c95d8f9213fe878720a20c13d8f045778ee))
* updating sticky card css [#1586](https://github.com/parameja1/language-servers/issues/1586) ([1c92249](https://github.com/parameja1/language-servers/commit/1c92249635b19e0b0a88b271a200ffd56ea65e9d))
* use document change events for auto trigger classifier input ([#1912](https://github.com/parameja1/language-servers/issues/1912)) ([2204da6](https://github.com/parameja1/language-servers/commit/2204da6193f2030ee546f61c969b1a664d8025e3))
* use new language server runtime ([#2023](https://github.com/parameja1/language-servers/issues/2023)) ([83ea1e4](https://github.com/parameja1/language-servers/commit/83ea1e42fe52990696eb9b878fa11e2c5331bec5))
* validate Create Prompt & Create Rule prompts input onChange ([#1854](https://github.com/parameja1/language-servers/issues/1854)) ([ee215c4](https://github.com/parameja1/language-servers/commit/ee215c4bc652a54556d31e64f86ed5179d174b4b))
* welcome card shows everytime ([#1332](https://github.com/parameja1/language-servers/issues/1332)) ([e030bdd](https://github.com/parameja1/language-servers/commit/e030bdd2f0daf61c062f64baa92563b539746e71))
</details>

<details><summary>lsp-antlr4: 0.1.18</summary>

## [0.1.18](https://github.com/parameja1/language-servers/compare/lsp-antlr4/v0.1.17...lsp-antlr4/v0.1.18) (2025-08-08)


### Features

* add client side ide diagnostics to telemetry event ([#1768](https://github.com/parameja1/language-servers/issues/1768)) ([d08fc6c](https://github.com/parameja1/language-servers/commit/d08fc6cccb9238cef9c2ba485e116c0516839537))
* adding mcp servers feature to the language-server ([#1544](https://github.com/parameja1/language-servers/issues/1544)) ([f37bf5f](https://github.com/parameja1/language-servers/commit/f37bf5f91921d7611c124de6d54dd6ec653038c6))
* **amazonq:** pinned context and rules ([#1663](https://github.com/parameja1/language-servers/issues/1663)) ([25e7a5a](https://github.com/parameja1/language-servers/commit/25e7a5ab8b6630525a4fd6acc0524f67f00af817))


### Bug Fixes

* **amazonq:** Use common utility to determine workspaceFolders and fix tests ([#1353](https://github.com/parameja1/language-servers/issues/1353)) ([483f532](https://github.com/parameja1/language-servers/commit/483f532b940d3ff2e914c0824f7501c3fe6a6235))
* bump runtimes and fix broken test ([#1323](https://github.com/parameja1/language-servers/issues/1323)) ([7d1a7b9](https://github.com/parameja1/language-servers/commit/7d1a7b9700ee2cc154dfe357ebbb62597d3f1582))
* ensure local index server updates with workspaceChangeEvent and bump runtimes ([#1424](https://github.com/parameja1/language-servers/issues/1424)) ([9babbb6](https://github.com/parameja1/language-servers/commit/9babbb643daa2893454dbc977d3802822b2c0aa6))
* use document change events for auto trigger classifier input ([#1912](https://github.com/parameja1/language-servers/issues/1912)) ([2204da6](https://github.com/parameja1/language-servers/commit/2204da6193f2030ee546f61c969b1a664d8025e3))
* use new language server runtime ([#2023](https://github.com/parameja1/language-servers/issues/2023)) ([83ea1e4](https://github.com/parameja1/language-servers/commit/83ea1e42fe52990696eb9b878fa11e2c5331bec5))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @aws/lsp-core bumped from ^0.0.13 to ^0.0.14
</details>

<details><summary>lsp-codewhisperer: 0.0.73</summary>

## [0.0.73](https://github.com/parameja1/language-servers/compare/lsp-codewhisperer/v0.0.72...lsp-codewhisperer/v0.0.73) (2025-08-08)


### Features

* add active user tracking with state persistence ([#1892](https://github.com/parameja1/language-servers/issues/1892)) ([a5587c5](https://github.com/parameja1/language-servers/commit/a5587c59e4a07074ad8afba930c6596dc28c693b))
* add C8 test coverage support ([#1567](https://github.com/parameja1/language-servers/issues/1567)) ([eee5048](https://github.com/parameja1/language-servers/commit/eee5048c783ffc300073865d391372d5a583365c))
* add client side ide diagnostics to telemetry event ([#1768](https://github.com/parameja1/language-servers/issues/1768)) ([d08fc6c](https://github.com/parameja1/language-servers/commit/d08fc6cccb9238cef9c2ba485e116c0516839537))
* add conversation compaction ([#1895](https://github.com/parameja1/language-servers/issues/1895)) ([8bb7144](https://github.com/parameja1/language-servers/commit/8bb7144e45cfce6cc9337fd49de7edbee61105b8))
* add EnableWebFormsToBlazorTransform flag to support WebForms to Blazor transformation ([#1577](https://github.com/parameja1/language-servers/issues/1577)) ([8c6e9f6](https://github.com/parameja1/language-servers/commit/8c6e9f6e0a6fd1a7464b26572c1b613b3864b27a))
* add logic to merge with previous suggestions for EDITS ([#1791](https://github.com/parameja1/language-servers/issues/1791)) ([072d13b](https://github.com/parameja1/language-servers/commit/072d13b08168f256ea3695bea03cf37b27d91f81))
* add packageId property to references in req.json ([#1570](https://github.com/parameja1/language-servers/issues/1570)) ([3b14b17](https://github.com/parameja1/language-servers/commit/3b14b173369936fe9bcee130a15f2ae1d39c9cb9))
* add support for SMUS Q CodeEditor client to send MD IDE origin ([#2032](https://github.com/parameja1/language-servers/issues/2032)) ([a8725b4](https://github.com/parameja1/language-servers/commit/a8725b4b7dcb7718864620721aa3633151e8877b))
* add userWrittenCodeTracker ([#1308](https://github.com/parameja1/language-servers/issues/1308)) ([c10819e](https://github.com/parameja1/language-servers/commit/c10819ea2c25ce564c75fb43a6792f3c919b757a))
* added file watchers to listen to mcp and persona config ([#1714](https://github.com/parameja1/language-servers/issues/1714)) ([4c5a7f8](https://github.com/parameja1/language-servers/commit/4c5a7f893bad37bea1946d37d06f57197c3ef04b))
* adding a check before invoking workspace context ([#1227](https://github.com/parameja1/language-servers/issues/1227)) ([3202b6e](https://github.com/parameja1/language-servers/commit/3202b6e0654a8037a3be3c50afa60960ce7bda91))
* adding current working directory to the stdio transport for mcp& ([#1691](https://github.com/parameja1/language-servers/issues/1691)) ([02c4d64](https://github.com/parameja1/language-servers/commit/02c4d645a8c2778deab7af9f5377c26e99d01f20))
* adding extra context as a workspace config for inline chat ([#1942](https://github.com/parameja1/language-servers/issues/1942)) ([1b402bb](https://github.com/parameja1/language-servers/commit/1b402bb8b083c5505a4e13ecf7e097a43388d10b))
* adding inline chat telemetry ([#2001](https://github.com/parameja1/language-servers/issues/2001)) ([8b1c9c7](https://github.com/parameja1/language-servers/commit/8b1c9c7c3859cdfbbd0abb059066a5c6fe2ffaf2))
* adding mcp servers feature to the language-server ([#1544](https://github.com/parameja1/language-servers/issues/1544)) ([f37bf5f](https://github.com/parameja1/language-servers/commit/f37bf5f91921d7611c124de6d54dd6ec653038c6))
* adding streakLength back for UserTriggerDecisionEvent ([#1841](https://github.com/parameja1/language-servers/issues/1841)) ([7052132](https://github.com/parameja1/language-servers/commit/7052132a5198944ef05ddbf857d622ba518e71da))
* adding streakLength back to UTDE telemetry ([#1902](https://github.com/parameja1/language-servers/issues/1902)) ([152f1c5](https://github.com/parameja1/language-servers/commit/152f1c5f23698f8c574120bcf4f2214e4540e7e6))
* **amazonq:** add a/b testing info into agenticChat toolkit metrics ([#1898](https://github.com/parameja1/language-servers/issues/1898)) ([6ab9b2c](https://github.com/parameja1/language-servers/commit/6ab9b2cef0125846c2f20fd8554f591808b59cd0))
* **amazonq:** add abap as supported language [#1463](https://github.com/parameja1/language-servers/issues/1463) ([116ea07](https://github.com/parameja1/language-servers/commit/116ea07d4ae4744bb105f474d0d964c366673e7e))
* **amazonq:** add fileUri to FileContext ([#1399](https://github.com/parameja1/language-servers/issues/1399)) ([e5ede36](https://github.com/parameja1/language-servers/commit/e5ede36518557bcf969d0b7eecf1f3e6bda2f618))
* **amazonq:** add new model error handling code ([#1972](https://github.com/parameja1/language-servers/issues/1972)) ([905f0fc](https://github.com/parameja1/language-servers/commit/905f0fcbb274926d22bcf30600ad4bd419ac8ee4))
* **amazonq:** add transformation preferences functionality to input gen ([#1792](https://github.com/parameja1/language-servers/issues/1792)) ([095f737](https://github.com/parameja1/language-servers/commit/095f737b86e6234b2568c6d4deafbbb90967bdbc))
* **amazonq:** added full system information to the logs ([#1875](https://github.com/parameja1/language-servers/issues/1875)) ([7795c6b](https://github.com/parameja1/language-servers/commit/7795c6b43274211731aa9bb295b41ec89db41a6d))
* **amazonq:** Adding QCodeReview tool to amazonQ ([#1882](https://github.com/parameja1/language-servers/issues/1882)) ([07e343b](https://github.com/parameja1/language-servers/commit/07e343b9fcef319bdbec80c48388e44b4b19269a))
* **amazonq:** allow opt-out for workspace context server ([#1867](https://github.com/parameja1/language-servers/issues/1867)) ([72b6d76](https://github.com/parameja1/language-servers/commit/72b6d76c5ed8e240aad6be80f65eab3497caaacf))
* **amazonq:** bundle dependency events from workspace context server ([#1712](https://github.com/parameja1/language-servers/issues/1712)) ([587da41](https://github.com/parameja1/language-servers/commit/587da4152ed1273117fc549f49d0b81eef7d98a9))
* **amazonq:** code edit tracker impl for next edit prediction ([#1617](https://github.com/parameja1/language-servers/issues/1617)) ([cae8993](https://github.com/parameja1/language-servers/commit/cae89938fe9b7e25d9a1b6552d573e79d29e97f3))
* **amazonq:** cursor tracker implementation ([#1600](https://github.com/parameja1/language-servers/issues/1600)) ([9be5a96](https://github.com/parameja1/language-servers/commit/9be5a9688647d1b4fac3aae852bd0ff4b026a873))
* **amazonq:** edit predition auto trigger ([#1662](https://github.com/parameja1/language-servers/issues/1662)) ([cbcd82b](https://github.com/parameja1/language-servers/commit/cbcd82bf6632859539e46d1fbe12ec75ab505fb4))
* **amazonq:** enable compaction, minor UI changes ([#1979](https://github.com/parameja1/language-servers/issues/1979)) ([2b56ca8](https://github.com/parameja1/language-servers/commit/2b56ca87f442a06b554043fee86edd79f96c638d))
* **amazonq:** enable show logs feature ([#1947](https://github.com/parameja1/language-servers/issues/1947)) ([86ea83d](https://github.com/parameja1/language-servers/commit/86ea83dd53b447f6decccf16559b76f4989ea712))
* **amazonq:** enable sonnet 4 for fra region ([#2069](https://github.com/parameja1/language-servers/issues/2069)) ([3a4b8df](https://github.com/parameja1/language-servers/commit/3a4b8df981b2c3b0532360a11472169fffec7924))
* **amazonq:** enhance workspaceContext classpath generation ([#1955](https://github.com/parameja1/language-servers/issues/1955)) ([f7ed20b](https://github.com/parameja1/language-servers/commit/f7ed20bc4010996c508f6ea8ca87950e117e43c1))
* **amazonq:** implement displayFindings tool ([#2029](https://github.com/parameja1/language-servers/issues/2029)) ([da11663](https://github.com/parameja1/language-servers/commit/da1166340f3d13e1d7fd83b260359661443230ea))
* **amazonq:** inline unit test generation ([#1406](https://github.com/parameja1/language-servers/issues/1406)) ([b01610c](https://github.com/parameja1/language-servers/commit/b01610cdbaa54b0c4340322cdf02785134d0f472))
* **amazonq:** integrate server side workspace context with inline completion ([#1402](https://github.com/parameja1/language-servers/issues/1402)) ([cf0f6b3](https://github.com/parameja1/language-servers/commit/cf0f6b38f8b6bc22f134c50642fcba8281a24479))
* **amazonq:** migrating / agents to q agentic chat ([#1799](https://github.com/parameja1/language-servers/issues/1799)) ([559b2ba](https://github.com/parameja1/language-servers/commit/559b2baec7da7b8fffb697990e3b249ffffcb85c))
* **amazonq:** model throttling message as card instead of chat message ([#1657](https://github.com/parameja1/language-servers/issues/1657)) ([7ee1f2a](https://github.com/parameja1/language-servers/commit/7ee1f2ac0bdaa9f73fb63fc6d20d0de6d7b07523))
* **amazonq:** next edit prediction configuration and feature flag ([#1635](https://github.com/parameja1/language-servers/issues/1635)) ([c1a01ac](https://github.com/parameja1/language-servers/commit/c1a01ace6413222af3c21d19033716a343b85434))
* **amazonq:** pinned context and rules ([#1663](https://github.com/parameja1/language-servers/issues/1663)) ([25e7a5a](https://github.com/parameja1/language-servers/commit/25e7a5ab8b6630525a4fd6acc0524f67f00af817))
* **amazonq:** read and validate the images as context ([#1716](https://github.com/parameja1/language-servers/issues/1716)) ([7a5d41f](https://github.com/parameja1/language-servers/commit/7a5d41f3cff7309d04d952fbb5dc063fb8658a06))
* **amazonq:** redirect /review, rename CodeReview tool, emit metrics, modify prompts ([#1964](https://github.com/parameja1/language-servers/issues/1964)) ([ad8e2db](https://github.com/parameja1/language-servers/commit/ad8e2db77e34f369fef9af71cdda2d3522f555c6))
* **amazonq:** rejectedEditTracker impl for next edit prediction ([#1631](https://github.com/parameja1/language-servers/issues/1631)) ([46246f1](https://github.com/parameja1/language-servers/commit/46246f1ab677ad7db0f12d88d80debd6264ff3f5))
* **amazonq:** revert auto-approve ([#2002](https://github.com/parameja1/language-servers/issues/2002)) ([c8181f7](https://github.com/parameja1/language-servers/commit/c8181f7a1de224dfcc7a77cd0bfc905fa1018372))
* **amazonq:** send relative file path for inline completion ([#1481](https://github.com/parameja1/language-servers/issues/1481)) ([35e4143](https://github.com/parameja1/language-servers/commit/35e4143dbaaeec8f3921b8859ce5a7451f099859))
* **amazonq:** telemetry for chat history and export ([#1314](https://github.com/parameja1/language-servers/issues/1314)) ([aaa08a4](https://github.com/parameja1/language-servers/commit/aaa08a4f29ac34f85ec9badf975d6e2e8d114627))
* **amazonq:** update workspace context server A/B testing filter ([#1830](https://github.com/parameja1/language-servers/issues/1830)) ([faeeee3](https://github.com/parameja1/language-servers/commit/faeeee3da7a8712f3501055ba8d485528185cdb6))
* **amazonq:** utils for NEP(next edit prediction) ([#1615](https://github.com/parameja1/language-servers/issues/1615)) ([e3e582e](https://github.com/parameja1/language-servers/commit/e3e582e425e0b9838a81bef04c2b1917fb6cfb66))
* apply a max 200MB total history size ([#1587](https://github.com/parameja1/language-servers/issues/1587)) ([62252f2](https://github.com/parameja1/language-servers/commit/62252f2470b4780b0f1c85558ee5f51366cc64b5))
* bump logging level of critical messages ([#1358](https://github.com/parameja1/language-servers/issues/1358)) ([d0bf283](https://github.com/parameja1/language-servers/commit/d0bf283e9af9321baf8fc2333c702f0317ad7daa))
* bundle nupkg files into artifact.zip ([#1510](https://github.com/parameja1/language-servers/issues/1510)) ([b47da11](https://github.com/parameja1/language-servers/commit/b47da112f256625e274a9156a09e1a4bdd6b6da3))
* **chat-client:** add auto-approve (trust mode) for built-in tools ([#1949](https://github.com/parameja1/language-servers/issues/1949)) ([f17b631](https://github.com/parameja1/language-servers/commit/f17b631d9e06371a11ef8e9cb1413762fb51a143))
* **chat-client:** add built-in tool permission and enable auto-approve ([#1890](https://github.com/parameja1/language-servers/issues/1890)) ([03b59c8](https://github.com/parameja1/language-servers/commit/03b59c8fba58db0f6b6c387cf5d53227c3f54673))
* **chat-client:** add shortcut for stop/reject/run commands ([#1932](https://github.com/parameja1/language-servers/issues/1932)) ([087f338](https://github.com/parameja1/language-servers/commit/087f3387ba736e92d014274e195f7ef76e377f1e))
* **chat-client:** handle keyboard shortcut for run/reject/stop shell commands and tooltips ([#1885](https://github.com/parameja1/language-servers/issues/1885)) ([f8e9461](https://github.com/parameja1/language-servers/commit/f8e94615b5ce8a3f4bf8837627fa4816a09cbef2))
* customizations profiles update ([#1246](https://github.com/parameja1/language-servers/issues/1246)) ([ea589c5](https://github.com/parameja1/language-servers/commit/ea589c5422f478be84f112295d82b0edb902ff21))
* enable iam auth for agentic chat ([#1736](https://github.com/parameja1/language-servers/issues/1736)) ([16b287b](https://github.com/parameja1/language-servers/commit/16b287b9edb3cb3a99b2b3f74c61df216641c5a6))
* enable webforms to blazor transformation via validation bypass ([#1929](https://github.com/parameja1/language-servers/issues/1929)) ([528f820](https://github.com/parameja1/language-servers/commit/528f8206b101e8f0c785b7fc0aceb87d6ef3de7b))
* enhance profile fetching logs to diagnose developerProfiles errors ([#1969](https://github.com/parameja1/language-servers/issues/1969)) ([eb688c2](https://github.com/parameja1/language-servers/commit/eb688c272df1251cd5c14ada7894bcaf625b6453))
* **flags:** change flag name to enablewebformtransform([#1804](https://github.com/parameja1/language-servers/issues/1804)) ([3b6c3be](https://github.com/parameja1/language-servers/commit/3b6c3be7630248cd00c19c16637f016d799ef8d1))
* Implement dynamic model selection based on extension capabilities and improve error handling ([#1737](https://github.com/parameja1/language-servers/issues/1737)) ([97db5d8](https://github.com/parameja1/language-servers/commit/97db5d8dd0a2c8214d37429375ec57aa68a462ee))
* improve code review tool reliability and error handling ([#2033](https://github.com/parameja1/language-servers/issues/2033)) ([124244e](https://github.com/parameja1/language-servers/commit/124244ee7d97adf71a52c4fde7ddb908dbc0bd08))
* integrate server side project context into agentic chat ([#1405](https://github.com/parameja1/language-servers/issues/1405)) ([e4d8f61](https://github.com/parameja1/language-servers/commit/e4d8f6144aefdd59543f380be59ab63c6bf9e291))
* language keywords detector impl for NEP ([#1614](https://github.com/parameja1/language-servers/issues/1614)) ([c48cd82](https://github.com/parameja1/language-servers/commit/c48cd824c67d42076c60a150035d8867204c198a))
* launch one remote workspace for all workspace folders ([#1348](https://github.com/parameja1/language-servers/issues/1348)) ([c240997](https://github.com/parameja1/language-servers/commit/c24099727c708994f319d9294068f6dee2a75b26))
* make origin a configurable parameter and pass it to downstream calls ([#1773](https://github.com/parameja1/language-servers/issues/1773)) ([a1c33d1](https://github.com/parameja1/language-servers/commit/a1c33d1d7e2bbea693a6d8a9885491c1815f7f62))
* merge updates for inline completions ([#1299](https://github.com/parameja1/language-servers/issues/1299)) ([44d81f0](https://github.com/parameja1/language-servers/commit/44d81f0b5754747d77bda60b40cc70950413a737))
* migrate inline completion telemetry to Flare ([#1336](https://github.com/parameja1/language-servers/issues/1336)) ([fcbdde4](https://github.com/parameja1/language-servers/commit/fcbdde4593cb55a728b996d3e04e90f9b6c6fa70))
* model selection for agentic chat ([#1294](https://github.com/parameja1/language-servers/issues/1294)) ([10abd04](https://github.com/parameja1/language-servers/commit/10abd041d340b1b6fe6adad81cc1f6bd1610826e))
* passing partialResultToken to onInlineCompletionHandler result for EDITS ([#1840](https://github.com/parameja1/language-servers/issues/1840)) ([270d5a3](https://github.com/parameja1/language-servers/commit/270d5a3c5adba6b49d938f310ac89ae9b7fbc401))
* **q:** builderid "paid tier" [#1197](https://github.com/parameja1/language-servers/issues/1197) ([d25bcb6](https://github.com/parameja1/language-servers/commit/d25bcb696572dd52938253bd15d838b1a0f57d68))
* remove auto model selection option ([#1548](https://github.com/parameja1/language-servers/issues/1548)) ([71fc801](https://github.com/parameja1/language-servers/commit/71fc80165a7e987ca4d103f40aa93980bcd015da))
* server side workspace context capability ([a65fec9](https://github.com/parameja1/language-servers/commit/a65fec9e0cb092ddc941b164fc049fb13bb628c5))
* support http transport without authorization for MCP ([97e806c](https://github.com/parameja1/language-servers/commit/97e806ce7ea5e5be1fd60c4a4d9a54cf76c8f8cb))
* support listAvailableModels server request ([#1808](https://github.com/parameja1/language-servers/issues/1808)) ([9f1ddb3](https://github.com/parameja1/language-servers/commit/9f1ddb327778dba6da49337b79c5fef19023b52d))
* support per region model selection ([#1683](https://github.com/parameja1/language-servers/issues/1683)) ([0b81b37](https://github.com/parameja1/language-servers/commit/0b81b37c15a8c407ec04904abb4bdccf829aa1c1))
* surface file operation errors in tooltip ([#1713](https://github.com/parameja1/language-servers/issues/1713)) ([8d80e06](https://github.com/parameja1/language-servers/commit/8d80e06a18e89c1ae33430676ba461b2d7acd314))
* update list of models and set default to 4 ([#1659](https://github.com/parameja1/language-servers/issues/1659)) ([1991658](https://github.com/parameja1/language-servers/commit/19916584d3f46049d30f0c23b41c3857a07bc622))
* update UserTriggerDecisionEventStreakLengthInteger min value ([#1878](https://github.com/parameja1/language-servers/issues/1878)) ([e06f180](https://github.com/parameja1/language-servers/commit/e06f18017864ea33e316059a708cb87aa6d8c562))


### Bug Fixes

* abandon requests with invalid toolResults ([#1274](https://github.com/parameja1/language-servers/issues/1274)) ([fd6ffcb](https://github.com/parameja1/language-servers/commit/fd6ffcba75ce116fb8b28edccd2424f07ff72834))
* accidental formatting [#1410](https://github.com/parameja1/language-servers/issues/1410) ([3774f40](https://github.com/parameja1/language-servers/commit/3774f405921a9ba26df4de6cc4044d1fa70f09a3))
* add bash command parsing for telemetry metrics ([#2039](https://github.com/parameja1/language-servers/issues/2039)) ([01d8112](https://github.com/parameja1/language-servers/commit/01d811225281a2e32f9cd6dab1b575aad8c0b4d6))
* add crypto import ([#1408](https://github.com/parameja1/language-servers/issues/1408)) ([6d5a5cf](https://github.com/parameja1/language-servers/commit/6d5a5cf545d882e7ce3afb93028ad2b4a4bcbb8e))
* add environment variable override to disable indexing library init ([#1504](https://github.com/parameja1/language-servers/issues/1504)) ([01e9662](https://github.com/parameja1/language-servers/commit/01e9662cafb5a86e63a23cf908c0d01aede4db89))
* add fsReplace tool to batch edits ([#1533](https://github.com/parameja1/language-servers/issues/1533)) ([4125134](https://github.com/parameja1/language-servers/commit/4125134f6e7eee8276d6146a507834b3309c2ec5))
* add grepSearch implementation ([#1359](https://github.com/parameja1/language-servers/issues/1359)) ([1260dce](https://github.com/parameja1/language-servers/commit/1260dcedb0839d7dd6ee0bb159e5f5bb3cbe5f3a))
* add latency metrics for invokeLLM metric ([#1681](https://github.com/parameja1/language-servers/issues/1681)) ([0cac52c](https://github.com/parameja1/language-servers/commit/0cac52c3d037da8fc4403f030738256b07195e76))
* add missing tools from the list ([#1756](https://github.com/parameja1/language-servers/issues/1756)) ([4b965d2](https://github.com/parameja1/language-servers/commit/4b965d279716bb17be3c9402610835d33887adf6))
* add more common ignore patterns for listDirectory ([#1287](https://github.com/parameja1/language-servers/issues/1287)) ([e983bfe](https://github.com/parameja1/language-servers/commit/e983bfe116c1d77460a6a932b6bbd8345b46a6a0))
* add more detailed log when mcp server initialize failed and tooltip change ([#1594](https://github.com/parameja1/language-servers/issues/1594)) ([cdab4d6](https://github.com/parameja1/language-servers/commit/cdab4d6b59c4ded425822063cb568c4b831402e8))
* Add persistent pair programming mode setting with database storage and UI synchronization([#1757](https://github.com/parameja1/language-servers/issues/1757)) ([ba683cc](https://github.com/parameja1/language-servers/commit/ba683cc6dc120863350025a4a082ecf3a95b5905))
* add proper encoding support for shell output ([#1903](https://github.com/parameja1/language-servers/issues/1903)) ([44a6d62](https://github.com/parameja1/language-servers/commit/44a6d629af7702662a02f384a6a542c0d72ccc39))
* add requestId to chat for QModelResponse errors ([#1284](https://github.com/parameja1/language-servers/issues/1284)) ([cfea9fa](https://github.com/parameja1/language-servers/commit/cfea9fa0ee58dcb936bb2debe63494870ea10ab0))
* add requestIds for each LLM call for amazonq_addMessage metric ([#1338](https://github.com/parameja1/language-servers/issues/1338)) ([4324c90](https://github.com/parameja1/language-servers/commit/4324c90224ad9f94b82d9e68e80f7563bdb5f2ea))
* add robust validation logic to fixHistory ([#1340](https://github.com/parameja1/language-servers/issues/1340)) ([14dac87](https://github.com/parameja1/language-servers/commit/14dac87358c7e1fd79a5e49614fd33c46d43bf72))
* add tests for workspace change supports ([#1484](https://github.com/parameja1/language-servers/issues/1484)) ([30559cb](https://github.com/parameja1/language-servers/commit/30559cb8a394e2f0e11b3150d7480d463014ea78))
* add validation for empty chat history ([#1403](https://github.com/parameja1/language-servers/issues/1403)) ([83d83b0](https://github.com/parameja1/language-servers/commit/83d83b0a22a5c3fb7cdad18c1fa829ee54f37119))
* add workspace folder to the relativePath ([#1764](https://github.com/parameja1/language-servers/issues/1764)) ([48a7769](https://github.com/parameja1/language-servers/commit/48a77697b26590e599a13e731f2cc5c62a893eae))
* adding acceptedCharacterCount to UserTriggerDecisionEvent ([#2014](https://github.com/parameja1/language-servers/issues/2014)) ([3f94486](https://github.com/parameja1/language-servers/commit/3f944865483a6913138335fe61eee70ae71d7c03))
* adding agenticcoding field to amazonqaddMessage metric([#1849](https://github.com/parameja1/language-servers/issues/1849)) ([d677c52](https://github.com/parameja1/language-servers/commit/d677c52c6139859bc0f2dd8e7ffe6a85b87db3f6))
* adding error handling for export tab ([#1350](https://github.com/parameja1/language-servers/issues/1350)) ([6bdd1ac](https://github.com/parameja1/language-servers/commit/6bdd1acb22bb089f8a5fd257a2fe47e212650382))
* adding files on VSC windows properly triggers reindexing ([#1820](https://github.com/parameja1/language-servers/issues/1820)) ([0c2d8eb](https://github.com/parameja1/language-servers/commit/0c2d8eb7dd875dfe86d1b2d094ec53a2a1221b97))
* adding files on windows properly triggers reindexing ([#1743](https://github.com/parameja1/language-servers/issues/1743)) ([a9d4c39](https://github.com/parameja1/language-servers/commit/a9d4c39afac6112294c9f486a834153a89656966))
* adding files on windows properly triggers reindexing ([#1755](https://github.com/parameja1/language-servers/issues/1755)) ([d0abaad](https://github.com/parameja1/language-servers/commit/d0abaade0e302b7d932254a95f47fa50906963d8))
* adding new telemetry metrics and addtional fields for existing metrics ([#1341](https://github.com/parameja1/language-servers/issues/1341)) ([d242225](https://github.com/parameja1/language-servers/commit/d2422252a27c57b05609c0829b0741b29c4d9236))
* adding normalizePathFromUri to mcpUtils to handle uri paths ([#1653](https://github.com/parameja1/language-servers/issues/1653)) ([20532bf](https://github.com/parameja1/language-servers/commit/20532bf276967c33c43a677e1c1621451c58b9a9))
* address bugs impacting indexing disabled functionality ([#1293](https://github.com/parameja1/language-servers/issues/1293)) ([18d86d4](https://github.com/parameja1/language-servers/commit/18d86d45ab4751a0cc981d440e9fda6c52029922))
* adjust bash command categories ([#2030](https://github.com/parameja1/language-servers/issues/2030)) ([25ed99f](https://github.com/parameja1/language-servers/commit/25ed99fcf0eeaa86b0a5e040e90d69becf625c71))
* adjust cross file context config ([#2011](https://github.com/parameja1/language-servers/issues/2011)) ([f7ade37](https://github.com/parameja1/language-servers/commit/f7ade3767e714d5178f24fd9cc90349c5f417979))
* adjust overall limit per request to 570K characters ([#1771](https://github.com/parameja1/language-servers/issues/1771)) ([07cf383](https://github.com/parameja1/language-servers/commit/07cf38325847b586190aed6864ffb86782af743a))
* adjust vs code auto trigger coefficients ([#1806](https://github.com/parameja1/language-servers/issues/1806)) ([25b1d1a](https://github.com/parameja1/language-servers/commit/25b1d1a1930f7d0cb922d3a085cbaac2a09340b9))
* **agenticChat:** UX fixes for MCP ([#1661](https://github.com/parameja1/language-servers/issues/1661)) ([bbdb4b4](https://github.com/parameja1/language-servers/commit/bbdb4b451352af50a914df684d7654686142a13b))
* align auto trigger classifier with documentChangeEvent ([#1914](https://github.com/parameja1/language-servers/issues/1914)) ([f308e17](https://github.com/parameja1/language-servers/commit/f308e17912df0b8f03f4e655cc34f2f875f4e65c))
* allowing reading multiple files with fsRead, minor tool validation fix ([#1297](https://github.com/parameja1/language-servers/issues/1297)) ([6568811](https://github.com/parameja1/language-servers/commit/65688116c4ebf4e4bda821d30226bdb2a334ca3d))
* **amazonq:** 500k max input limit in user input box. Align payload prompt with user typed prompt. ([#1325](https://github.com/parameja1/language-servers/issues/1325)) ([3338cc1](https://github.com/parameja1/language-servers/commit/3338cc1b5dcfd375385d7db2fa693870687dba8a))
* **amazonq:** add codewhispererCustomizationArn to codewhisperer_perceivedLatency ([#1285](https://github.com/parameja1/language-servers/issues/1285)) ([b0562ca](https://github.com/parameja1/language-servers/commit/b0562cac4e5cf9b6477e5fbce4a2ee14a0d2b562))
* **amazonq:** add distinctive identifier for cloud trail ([#2059](https://github.com/parameja1/language-servers/issues/2059)) ([18bbc2c](https://github.com/parameja1/language-servers/commit/18bbc2c54f5cc72e2624020fc17214c448926b0e))
* **amazonq:** add fallback classpath generation ([#2077](https://github.com/parameja1/language-servers/issues/2077)) ([3a6ef14](https://github.com/parameja1/language-servers/commit/3a6ef14e78fa2e75b837bba6524751d65038f416))
* **amazonq:** add files created by fsWrite tool to @Files list ([#1784](https://github.com/parameja1/language-servers/issues/1784)) ([cfeb3be](https://github.com/parameja1/language-servers/commit/cfeb3be43e425fae89d795cacad62031cc1ee029))
* **amazonq:** add ignore pattern for file events from workspace context server ([#1703](https://github.com/parameja1/language-servers/issues/1703)) ([7a0dd88](https://github.com/parameja1/language-servers/commit/7a0dd88a2f5251af8018084c55406cd8b9eaf51a))
* **amazonq:** add image context to chat history ([#1859](https://github.com/parameja1/language-servers/issues/1859)) ([788920b](https://github.com/parameja1/language-servers/commit/788920bdd2de0448fd335734b62ac80aba9cff82))
* **amazonq:** add jitter for websocket client re-connections ([#1752](https://github.com/parameja1/language-servers/issues/1752)) ([0542858](https://github.com/parameja1/language-servers/commit/0542858891ec982bd22369ed42318ff93537f600))
* **amazonq:** additional checks for binary and credential files ([#1866](https://github.com/parameja1/language-servers/issues/1866)) ([76656c9](https://github.com/parameja1/language-servers/commit/76656c9b2bb5080f64f581bb3b39cd55a3015bdf))
* **amazonq:** allow taking .jpg file as image context, add image cont& ([#1814](https://github.com/parameja1/language-servers/issues/1814)) ([4d36fa4](https://github.com/parameja1/language-servers/commit/4d36fa4a0a04692dba720bc0288c6cee7f45a1fc))
* **amazonq:** always restore chat tabs when onReady is received ([#1524](https://github.com/parameja1/language-servers/issues/1524)) ([54fa813](https://github.com/parameja1/language-servers/commit/54fa813eb124cc3e59c30390a9ec2cc7303f9a1d))
* **amazonq:** avoid workspace context server missing historical dependency events ([#1946](https://github.com/parameja1/language-servers/issues/1946)) ([3362956](https://github.com/parameja1/language-servers/commit/3362956ded75d77296fa98abb172bd87d66e5d5e))
* **amazonq:** catch mcp initialization errors ([#1873](https://github.com/parameja1/language-servers/issues/1873)) ([afdd6a4](https://github.com/parameja1/language-servers/commit/afdd6a4bd1db7c3990a7a279ebbbfbe0640e27c3))
* **amazonq:** change the customer UI message to out of the workspace ([#1822](https://github.com/parameja1/language-servers/issues/1822)) ([624def5](https://github.com/parameja1/language-servers/commit/624def51e4d9e21ee8d045ffe528455b69cdfecb))
* **amazonq:** change the icon for error and reduce the count ([#1789](https://github.com/parameja1/language-servers/issues/1789)) ([758d31c](https://github.com/parameja1/language-servers/commit/758d31c186b163712312fdffb04ee692cfe11de8))
* **amazonq:** change the icon for error and reduce the count ([#1789](https://github.com/parameja1/language-servers/issues/1789)) ([758d31c](https://github.com/parameja1/language-servers/commit/758d31c186b163712312fdffb04ee692cfe11de8))
* **amazonq:** change the image filter used in open file dialog ([#1838](https://github.com/parameja1/language-servers/issues/1838)) ([d9da4cb](https://github.com/parameja1/language-servers/commit/d9da4cbb7b1995ef43aaba1b7e67d26fd61a3c57))
* **amazonq:** continueous edits trigger returns earlier as first session is already closed ([#1907](https://github.com/parameja1/language-servers/issues/1907)) ([a2dc5a8](https://github.com/parameja1/language-servers/commit/a2dc5a87e488e523c12270b98749c1f835b55e87))
* **amazonq:** differentiate listWorkspaceMetadata failure and empty result ([#1566](https://github.com/parameja1/language-servers/issues/1566)) ([ae792d5](https://github.com/parameja1/language-servers/commit/ae792d5b1266c1c41b2a3f9129002ba3ce091c2b))
* **amazonq:** emit failed status for amazonq_invokeLLM ([#2071](https://github.com/parameja1/language-servers/issues/2071)) ([ee52a41](https://github.com/parameja1/language-servers/commit/ee52a41bc869b275fff708d7955b59f43b93bbd4))
* **amazonq:** export q chat in windows not working due to invalid path ([#1330](https://github.com/parameja1/language-servers/issues/1330)) ([2dfc9cb](https://github.com/parameja1/language-servers/commit/2dfc9cbf53dad772ae40f96ce6e026b41d887a51))
* **amazonq:** filter languages at workspace context server onDeleteFiles ([#1684](https://github.com/parameja1/language-servers/issues/1684)) ([4272eec](https://github.com/parameja1/language-servers/commit/4272eec6ce4554560fdf8888d85d31315db2d964))
* **amazonq:** fix fallout of [#2051](https://github.com/parameja1/language-servers/issues/2051) ([#2057](https://github.com/parameja1/language-servers/issues/2057)) ([565066b](https://github.com/parameja1/language-servers/commit/565066bb61adda60333c9646db958d4208bcc8af))
* **amazonq:** fix for honouring the index cache dir path value ([#1448](https://github.com/parameja1/language-servers/issues/1448)) ([40e15b7](https://github.com/parameja1/language-servers/commit/40e15b75ec514bb7019affdebdb12b923370bf27))
* **amazonq:** fix for mcp server permissions ([#2026](https://github.com/parameja1/language-servers/issues/2026)) ([89ae720](https://github.com/parameja1/language-servers/commit/89ae720dc036a90338d192aca801a858e8fa19f8))
* **amazonq:** fix for mcp server permissions to prefer workspace agent config files ([#2038](https://github.com/parameja1/language-servers/issues/2038)) ([d2ac614](https://github.com/parameja1/language-servers/commit/d2ac614f0f16faa8bf689ac9c8bff09d64fc3a3b))
* **amazonq:** fix for mcp server unnecessary refresh from file watchers ([#1933](https://github.com/parameja1/language-servers/issues/1933)) ([208909b](https://github.com/parameja1/language-servers/commit/208909b55ecda40ff8d412b2b3be890eccee70bc))
* **amazonq:** fix line endings before fswrite for windows ([#1483](https://github.com/parameja1/language-servers/issues/1483)) ([9e4c284](https://github.com/parameja1/language-servers/commit/9e4c28480f0660e10cbfce154323996ace7aea2b))
* **amazonq:** fix processing empty unsupported workspace file ([#2017](https://github.com/parameja1/language-servers/issues/2017)) ([9e4d0af](https://github.com/parameja1/language-servers/commit/9e4d0af244b5edba73771b6cb4290d922ef83c43))
* **amazonq:** fix the order of publishing the chat stop ack message ([#1761](https://github.com/parameja1/language-servers/issues/1761)) ([20c2263](https://github.com/parameja1/language-servers/commit/20c22638a34d557fc755e33aed798abc1ce3a6d9))
* **amazonq:** fix to add disable/enable feature back to mcp servers ([#2052](https://github.com/parameja1/language-servers/issues/2052)) ([c03e017](https://github.com/parameja1/language-servers/commit/c03e017b9ccbbbb9c80a3c3afd5da38a50bd6cff))
* **amazonq:** fix to add grep to read only commands ([#1787](https://github.com/parameja1/language-servers/issues/1787)) ([6762b27](https://github.com/parameja1/language-servers/commit/6762b275e9b21de268a7c89e5dc0f37e3295ee60))
* **amazonq:** fix to add upper limit validation for tool description ([#1760](https://github.com/parameja1/language-servers/issues/1760)) ([2d18a3b](https://github.com/parameja1/language-servers/commit/2d18a3ba69d22b26dea5170656d79b9eacc202b1))
* **amazonq:** fix to include explanation field in mcp tools schema but remove it for tool execution ([#1759](https://github.com/parameja1/language-servers/issues/1759)) ([b66c772](https://github.com/parameja1/language-servers/commit/b66c77218d3cc5476cec32922dc22fccd9ca1861))
* **amazonq:** fix typo in image context list ([#1836](https://github.com/parameja1/language-servers/issues/1836)) ([179b553](https://github.com/parameja1/language-servers/commit/179b553a1444201e696fd52e7705dc0c05154eab))
* **amazonq:** fix UTDE suggestion state for pagination cases ([#1433](https://github.com/parameja1/language-servers/issues/1433)) ([6bf21e5](https://github.com/parameja1/language-servers/commit/6bf21e52fc0b7cefb7ee8c0ac820ad7825ba7de7))
* **amazonq:** Handle throttling errors gracefully and give correct error message([#1733](https://github.com/parameja1/language-servers/issues/1733)) ([232e7ea](https://github.com/parameja1/language-servers/commit/232e7eac9556af3ab5e8cc86185b0c90b144cdd7))
* **amazonq:** handle undefined paths gracefully and retry ([#1825](https://github.com/parameja1/language-servers/issues/1825)) ([c52b017](https://github.com/parameja1/language-servers/commit/c52b017eef0666433cbb0b6d8086254dc1af5fee))
* **amazonq:** include tsx and jsx files in workspace context server ([#1790](https://github.com/parameja1/language-servers/issues/1790)) ([79691ef](https://github.com/parameja1/language-servers/commit/79691ef607d9bc98032fe2e59a5031601a4dba9a))
* **amazonq:** init mcp servers in batch of 5 ([#1758](https://github.com/parameja1/language-servers/issues/1758)) ([43018a6](https://github.com/parameja1/language-servers/commit/43018a6bb9d782a5e46d2d60f5a07fffd73cc613))
* **amazonq:** init mcp servers in parallel ([#1754](https://github.com/parameja1/language-servers/issues/1754)) ([92527c6](https://github.com/parameja1/language-servers/commit/92527c6b0cee41634c3bce74173f1c2ced08a985))
* **amazonq:** itemid was accidentally removed by [#1689](https://github.com/parameja1/language-servers/issues/1689) ([#1698](https://github.com/parameja1/language-servers/issues/1698)) ([33524c0](https://github.com/parameja1/language-servers/commit/33524c092af8088705a3cbae09c6249ad5940ce6))
* **amazonq:** make display findings tool run more often ([#2067](https://github.com/parameja1/language-servers/issues/2067)) ([479ccd0](https://github.com/parameja1/language-servers/commit/479ccd0a1b8b7e98684275c66274d284599c5933))
* **amazonq:** make JSTSDependencyHandler process scoped packages correctly ([#1910](https://github.com/parameja1/language-servers/issues/1910)) ([3034494](https://github.com/parameja1/language-servers/commit/303449454254987047649c49b7a377d45ad284b6))
* **amazonq:** make workspace context server upload dependency chunks sequentially ([#1769](https://github.com/parameja1/language-servers/issues/1769)) ([c8329e6](https://github.com/parameja1/language-servers/commit/c8329e6b90be2c24d72a4525b8903384746de2ab))
* **amazonq:** nep auto trigger should use file uri but filename is used ([#1753](https://github.com/parameja1/language-servers/issues/1753)) ([d010c66](https://github.com/parameja1/language-servers/commit/d010c6610e457fab1a5982e1c677f699150fefe0))
* **amazonq:** pagination request should also used truncated left/right context ([#1497](https://github.com/parameja1/language-servers/issues/1497)) ([0a4ab2c](https://github.com/parameja1/language-servers/commit/0a4ab2ceffe0d3d759587199912adbc84dfb598f))
* **amazonq:** prevent WCS matching workspaceFolder with only prefix ([#1782](https://github.com/parameja1/language-servers/issues/1782)) ([988d952](https://github.com/parameja1/language-servers/commit/988d952485b0f026200a19d17cacd323cd9e359e))
* **amazonq:** prevent workspace context server initialization workflow from overlapping ([#1668](https://github.com/parameja1/language-servers/issues/1668)) ([1625abd](https://github.com/parameja1/language-servers/commit/1625abd2a9fa969859236cfe1b57fa1cdd2dcc33))
* **amazonq:** profile is not set after re-auth ([#1690](https://github.com/parameja1/language-servers/issues/1690)) ([2a445ee](https://github.com/parameja1/language-servers/commit/2a445eef4cc2a70471fd1fc49e6ca4e301051442))
* **amazonq:** properly deposit workspace context server resources on exit ([#1647](https://github.com/parameja1/language-servers/issues/1647)) ([34efb2b](https://github.com/parameja1/language-servers/commit/34efb2b0e4ded031b33ed1ed7b96cf41fbe8e03b))
* **amazonq:** remove storing zips under workspaceContextArtifacts ([#1601](https://github.com/parameja1/language-servers/issues/1601)) ([c8445d5](https://github.com/parameja1/language-servers/commit/c8445d562a11153cc77fac52237f914478f54cb7))
* **amazonq:** remove the deep copy logic in updateRequestInputWithToolResults ([#1870](https://github.com/parameja1/language-servers/issues/1870)) ([f209a15](https://github.com/parameja1/language-servers/commit/f209a15785106af43fd97bfa99b393a13d9a9bab))
* **amazonq:** remove the stack trace check from service unavailable exceptions ([#1810](https://github.com/parameja1/language-servers/issues/1810)) ([a5677f0](https://github.com/parameja1/language-servers/commit/a5677f03d54aa8e42a71e71c524700c23825ed35))
* **amazonq:** remove the unnecessary new line after the chat shell command output ([#1750](https://github.com/parameja1/language-servers/issues/1750)) ([c9f8989](https://github.com/parameja1/language-servers/commit/c9f8989c7e66e2f594e8c56ad55ce586fb9f6b34))
* **amazonq:** removed explanation field for mcp servers ([#1717](https://github.com/parameja1/language-servers/issues/1717)) ([cfc6831](https://github.com/parameja1/language-servers/commit/cfc683111307dc25c619177e0267860c096fcfe1))
* **amazonq:** replacing image's large binary in log ([#1905](https://github.com/parameja1/language-servers/issues/1905)) ([a06ed62](https://github.com/parameja1/language-servers/commit/a06ed626e118c5f846e494630ef0577ce1ace628))
* **amazonq:** return empty if nep auto trigger is not triggered ([#1766](https://github.com/parameja1/language-servers/issues/1766)) ([e5c1708](https://github.com/parameja1/language-servers/commit/e5c17085d43747e8fc852f47182a458ca6e81abb))
* **amazonq:** revert commit f17b631d9e06371a11ef8e9cb1413762fb51a143 ([#1965](https://github.com/parameja1/language-servers/issues/1965)) ([8c2cab6](https://github.com/parameja1/language-servers/commit/8c2cab6995922c96030b5bbdf3cbbdef7eadd7c2))
* **amazonq:** save one unnecessary listWorkspaceMetadata call ([#1742](https://github.com/parameja1/language-servers/issues/1742)) ([a9eb908](https://github.com/parameja1/language-servers/commit/a9eb908b183a85257958c511e47faf2bc29410df))
* **amazonq:** send pinned context and rules as message pair ([#1762](https://github.com/parameja1/language-servers/issues/1762)) ([322add6](https://github.com/parameja1/language-servers/commit/322add6f8b3b6edd5b3e4b37fc783a1079f15596))
* **amazonq:** serialize S3 uploads for file events from workspace context server ([#1700](https://github.com/parameja1/language-servers/issues/1700)) ([1884c57](https://github.com/parameja1/language-servers/commit/1884c5793d46227d871e8cf25c940f7a87795f04))
* **amazonq:** shouldn't exit inline  flow before we're sure there is no Edit/Completion trigger ([#1819](https://github.com/parameja1/language-servers/issues/1819)) ([dc8d89b](https://github.com/parameja1/language-servers/commit/dc8d89b39ee230aba6cfb032f81bda3476a5cc84))
* **amazonq:** show active file in Context dropdown ([#1815](https://github.com/parameja1/language-servers/issues/1815)) ([fe1156c](https://github.com/parameja1/language-servers/commit/fe1156cdd6becbda4b7218cbb06f615a5d919def))
* **amazonq:** skip sending websocket request when uploading fails ([#1562](https://github.com/parameja1/language-servers/issues/1562)) ([fec6fbd](https://github.com/parameja1/language-servers/commit/fec6fbd563826afc3f944b90b85178f9e2f9c8aa))
* **amazonq:** skips continuous monitoring when WCS sees workspace as idle ([#2066](https://github.com/parameja1/language-servers/issues/2066)) ([9cb959d](https://github.com/parameja1/language-servers/commit/9cb959d4cc450d0907f8bf5265ba01d2aa68bcd0))
* **amazonq:** stop continuous monitor when WCS sees ServiceQuotaExceeded ([#1957](https://github.com/parameja1/language-servers/issues/1957)) ([81e19b9](https://github.com/parameja1/language-servers/commit/81e19b97017edddf486ac92fa6a8dc5fb184e008))
* **amazonq:** update mcp and persona config to agent config ([#1897](https://github.com/parameja1/language-servers/issues/1897)) ([530977f](https://github.com/parameja1/language-servers/commit/530977f8c73c7946a0205f02014248d71b4b1fe0))
* **amazonq:** Use common utility to determine workspaceFolders and fix tests ([#1353](https://github.com/parameja1/language-servers/issues/1353)) ([483f532](https://github.com/parameja1/language-servers/commit/483f532b940d3ff2e914c0824f7501c3fe6a6235))
* **amazonq:** utg shouldnt throw when there is no corresponding config as its not handled at callers ([#1572](https://github.com/parameja1/language-servers/issues/1572)) ([cf79a8c](https://github.com/parameja1/language-servers/commit/cf79a8c69fcf81beec0e3b138bcb4f09172f12dc))
* **amazonq:** wrap sspc lsp handlers in try/catch so failures do not take down server ([#1464](https://github.com/parameja1/language-servers/issues/1464)) ([6a731cb](https://github.com/parameja1/language-servers/commit/6a731cb680d0574b4033f1fe209f788eb1fae221))
* **amazonq:** wrong path in the logs for the function ([#1978](https://github.com/parameja1/language-servers/issues/1978)) ([ed8b4f6](https://github.com/parameja1/language-servers/commit/ed8b4f6755accb624e7dc8c645ecd5cd9370a0f2))
* bug fix for exportResultsArchive to call with profileArn as parameter ([#1300](https://github.com/parameja1/language-servers/issues/1300)) ([16162f6](https://github.com/parameja1/language-servers/commit/16162f67315d174acacb2feb163fa8d9044e147f))
* bug for credential refresh in StreamingClientServiceIAM ([#1944](https://github.com/parameja1/language-servers/issues/1944)) ([a69ec0c](https://github.com/parameja1/language-servers/commit/a69ec0c63423187c96bdd2b03d14da8a723c192e))
* bug in skip edit for userWrittenCode ([#1315](https://github.com/parameja1/language-servers/issues/1315)) ([86a136b](https://github.com/parameja1/language-servers/commit/86a136b5db9c3a3d15e12421e9b941107842b475))
* bump runtimes and fix broken test ([#1323](https://github.com/parameja1/language-servers/issues/1323)) ([7d1a7b9](https://github.com/parameja1/language-servers/commit/7d1a7b9700ee2cc154dfe357ebbb62597d3f1582))
* change the version to axios to ^1.8.4 ([#1421](https://github.com/parameja1/language-servers/issues/1421)) ([f127538](https://github.com/parameja1/language-servers/commit/f127538832d01ebaf0638a0512dc9f0837b8f2ff))
* **chat-client:** revert for add built-in tool permission and enable auto-approve ([#1890](https://github.com/parameja1/language-servers/issues/1890)) ([#1900](https://github.com/parameja1/language-servers/issues/1900)) ([34b41b8](https://github.com/parameja1/language-servers/commit/34b41b8f87c21d2ee6b98643339dbdfa71efcb77))
* **chat-client:** revert for amazon q keyboard shortcuts feature ([#1901](https://github.com/parameja1/language-servers/issues/1901)) ([522f8de](https://github.com/parameja1/language-servers/commit/522f8de6dba8dfa9b4363934cd7fcea905add1ce))
* clear history for `inputTooLong` errors ([#1268](https://github.com/parameja1/language-servers/issues/1268)) ([b00b014](https://github.com/parameja1/language-servers/commit/b00b0146b55452c6472d3bc9b44a80afe393b686))
* clear IDE context for auto-retry requests not initiated by the user ([#1680](https://github.com/parameja1/language-servers/issues/1680)) ([13c9455](https://github.com/parameja1/language-servers/commit/13c94558706d0181c1a2d64b439be90a601e8f74))
* connect chat history to workspace file ([#1767](https://github.com/parameja1/language-servers/issues/1767)) ([4575727](https://github.com/parameja1/language-servers/commit/4575727911a4efb21a3f24a3d400c7844451c243))
* convert array values to comma-separated strings in telemetry metrics emitAgencticLoop_InvokeLLM ([#1458](https://github.com/parameja1/language-servers/issues/1458)) ([6682e21](https://github.com/parameja1/language-servers/commit/6682e2169f7f3815362d2d3a4bcdef809dea8c27))
* convert RTS improperly formed request error to 500 ([#1356](https://github.com/parameja1/language-servers/issues/1356)) ([9d74a17](https://github.com/parameja1/language-servers/commit/9d74a17dd850dbe59a34b75ffb563e037856485b))
* correct icon for mcp button ([#1605](https://github.com/parameja1/language-servers/issues/1605)) ([a2e7d57](https://github.com/parameja1/language-servers/commit/a2e7d571eafb3767471b401242ac8a25b41961cd))
* correct the implementation of gathering open tabs in cross file context ([#2040](https://github.com/parameja1/language-servers/issues/2040)) ([b7b7a2b](https://github.com/parameja1/language-servers/commit/b7b7a2bd2020f50069ce89f6505cc2a36b1f3fa7))
* decode UTF-16LE shell output on Windows ([#1456](https://github.com/parameja1/language-servers/issues/1456)) ([ae48442](https://github.com/parameja1/language-servers/commit/ae48442f499589560ff0bc9e3832171c98e53abb))
* default model should be undefined until feature is enabled ([#1640](https://github.com/parameja1/language-servers/issues/1640)) ([8d2e6f0](https://github.com/parameja1/language-servers/commit/8d2e6f0faaa7ec155e75e22b24e11e9f5896833f))
* diff reports no lines added or removed ([#1549](https://github.com/parameja1/language-servers/issues/1549)) ([562f13e](https://github.com/parameja1/language-servers/commit/562f13e0223a8a01fefc9ca449aad02da9734709))
* Disable Concurrent inline completion handler ([#1880](https://github.com/parameja1/language-servers/issues/1880)) ([61eeb8c](https://github.com/parameja1/language-servers/commit/61eeb8c93b5454c5a99ebb79b5593007d08007e5))
* disable grep search ([#1514](https://github.com/parameja1/language-servers/issues/1514)) ([f4f66fa](https://github.com/parameja1/language-servers/commit/f4f66fa3d5f8a335ae696506a4e92afe0deb262b))
* do not auto trigger when there is immediate right context for VSC/JB ([#1802](https://github.com/parameja1/language-servers/issues/1802)) ([fdb29d4](https://github.com/parameja1/language-servers/commit/fdb29d472c5a0bc7e0a89f5611245248c380cfe8))
* duplicate suggestion in inline response ([#1331](https://github.com/parameja1/language-servers/issues/1331)) ([23b0c90](https://github.com/parameja1/language-servers/commit/23b0c901b9f98490af93b75abe6ccd44ed56fddf))
* editor state does not use the same language id as file context ([#1924](https://github.com/parameja1/language-servers/issues/1924)) ([c10866d](https://github.com/parameja1/language-servers/commit/c10866d70070173aba63be1c78945a4da6129018))
* emit latency as an int for creating visualizations ([#1763](https://github.com/parameja1/language-servers/issues/1763)) ([34bf564](https://github.com/parameja1/language-servers/commit/34bf5644444bf66dc5d6b87fc70bd3561d48728a))
* emit metric for tool error ([#1954](https://github.com/parameja1/language-servers/issues/1954)) ([c3bbcea](https://github.com/parameja1/language-servers/commit/c3bbceabcea3d7aea2e414abc632c3a744b0e02b))
* emit telemetry event to RTS when failed or cancelled ([#1384](https://github.com/parameja1/language-servers/issues/1384)) ([2e542ae](https://github.com/parameja1/language-servers/commit/2e542aebb2da37a747ae9dbd6b1fd25e95cf6d93))
* enable fuzzySearch tool ([#1328](https://github.com/parameja1/language-servers/issues/1328)) ([93d9c9c](https://github.com/parameja1/language-servers/commit/93d9c9ca704b59769eca0ce45857db6f9de88aa6))
* enable grepSearch tool ([#1396](https://github.com/parameja1/language-servers/issues/1396)) ([a3a39de](https://github.com/parameja1/language-servers/commit/a3a39de85f822e10fe5a9e9d88165fa26739bc87))
* enable repomap for all users ([#1967](https://github.com/parameja1/language-servers/issues/1967)) ([6954085](https://github.com/parameja1/language-servers/commit/69540851e54b65729b2affbe3ae7d98629bdb5f4))
* ensure local index server updates with workspaceChangeEvent and bump runtimes ([#1424](https://github.com/parameja1/language-servers/issues/1424)) ([9babbb6](https://github.com/parameja1/language-servers/commit/9babbb643daa2893454dbc977d3802822b2c0aa6))
* errors/cancellation not resetting undoAll state ([#1273](https://github.com/parameja1/language-servers/issues/1273)) ([823b199](https://github.com/parameja1/language-servers/commit/823b199b77de7e715caf31479b9ccc55b0a17445))
* extra line when user run the command ([#1499](https://github.com/parameja1/language-servers/issues/1499)) ([86a17f5](https://github.com/parameja1/language-servers/commit/86a17f582ed21000ebc48fcab317b2cb212c4488))
* filter out .git folder from listDirectory ([#1286](https://github.com/parameja1/language-servers/issues/1286)) ([547ecaf](https://github.com/parameja1/language-servers/commit/547ecafb561fd3d6bf7a264def829160901dd23a))
* fix blocking regex calls being made before indexing ([#1916](https://github.com/parameja1/language-servers/issues/1916)) ([3c0592f](https://github.com/parameja1/language-servers/commit/3c0592fec53922b0493f51b7e88313971cb54e93))
* fix for empty description of mcp tools ([#1612](https://github.com/parameja1/language-servers/issues/1612)) ([820c3bf](https://github.com/parameja1/language-servers/commit/820c3bfde935cba32b608dad4ac19fdc40a45203))
* fix for mcp delete to remove it from mcp config file ([#1956](https://github.com/parameja1/language-servers/issues/1956)) ([ad71312](https://github.com/parameja1/language-servers/commit/ad713122fcb9da90c17301f1312de13ba1d28d01))
* fix for overwriting in workspace level config and persona files ([#1624](https://github.com/parameja1/language-servers/issues/1624)) ([b201e0c](https://github.com/parameja1/language-servers/commit/b201e0c938f98329d83ea6ba39776d36ca7e44d0))
* fix paths array issue in fsRead ([#1496](https://github.com/parameja1/language-servers/issues/1496)) ([4bf8624](https://github.com/parameja1/language-servers/commit/4bf8624f6474590cb0632c9530ca6ff624ac2358))
* fix to remove config from agent file for failed initialization ([#1948](https://github.com/parameja1/language-servers/issues/1948)) ([45645c2](https://github.com/parameja1/language-servers/commit/45645c2cd7c241c54ddfebced6f377f38e077957))
* fix to remove tool name sanitization ([#1621](https://github.com/parameja1/language-servers/issues/1621)) ([e4e6d96](https://github.com/parameja1/language-servers/commit/e4e6d9621d8ce70a626e9153859cd4660ccb4c26))
* fix uncaught exception in workspaceFolderManager ([#1428](https://github.com/parameja1/language-servers/issues/1428)) ([1b15457](https://github.com/parameja1/language-servers/commit/1b154570c9cf1eb1d56141095adea4459426b774))
* Forward slash shown in rules list in multi-root workspaces on windows ([#1855](https://github.com/parameja1/language-servers/issues/1855)) ([061caa6](https://github.com/parameja1/language-servers/commit/061caa6450946e20cd1630b92f9b6dada8058edd))
* fsReplace still available when agentic mode off ([#1731](https://github.com/parameja1/language-servers/issues/1731)) ([7904ea1](https://github.com/parameja1/language-servers/commit/7904ea18849bb5b9aa6c0e1eb4c6491f3d1598f4))
* grepSearch on Windows ([#1494](https://github.com/parameja1/language-servers/issues/1494)) ([57fca2f](https://github.com/parameja1/language-servers/commit/57fca2f0423ad485570f59e6921f36addb7d43a7))
* handle dangling tool results when history is cleared due to size limits ([#1527](https://github.com/parameja1/language-servers/issues/1527)) ([9082323](https://github.com/parameja1/language-servers/commit/9082323d1affe9cb71001aa76a216b690e892b06))
* handle requestAborted errors silently ([#1394](https://github.com/parameja1/language-servers/issues/1394)) ([6b12b54](https://github.com/parameja1/language-servers/commit/6b12b544fbd84b9c57662754ba27aea491be9048))
* ide mapping for VS/Eclipse for send telemetry API ([#1724](https://github.com/parameja1/language-servers/issues/1724)) ([84373c5](https://github.com/parameja1/language-servers/commit/84373c537087492445dbf1d3c9d7b86254603ceb))
* imagecontext image name bug, mutliple images in pinned context ([#1834](https://github.com/parameja1/language-servers/issues/1834)) ([27d60ab](https://github.com/parameja1/language-servers/commit/27d60ab5f5249635a9e73be1ee96ecb820133f9a))
* improve data synchronization of server side workspace context ([#1278](https://github.com/parameja1/language-servers/issues/1278)) ([f50c4a7](https://github.com/parameja1/language-servers/commit/f50c4a71103b82a9780e542eef2e3622c16332d5))
* improve the executeBash tool spec ([#1465](https://github.com/parameja1/language-servers/issues/1465)) ([cab801b](https://github.com/parameja1/language-servers/commit/cab801b3f7ad77c1fc99d06426fd8ba481109b54))
* include toolSpec count for history trimming ([#1778](https://github.com/parameja1/language-servers/issues/1778)) ([8a5322a](https://github.com/parameja1/language-servers/commit/8a5322a1f2e2452d5535d5cfcacd6c2bfd595b0e))
* incorrect history when user aborts in-progress toolUse ([#1542](https://github.com/parameja1/language-servers/issues/1542)) ([0288d85](https://github.com/parameja1/language-servers/commit/0288d850f34ab0498f300da0a83c123bf7c62e54))
* increase the code start and end line number by 1 ([#1470](https://github.com/parameja1/language-servers/issues/1470)) ([743666f](https://github.com/parameja1/language-servers/commit/743666fd18f262363a49a56bbd5063c24f1d4d31))
* increase timeout value for the streaming client ([#1654](https://github.com/parameja1/language-servers/issues/1654)) ([439a488](https://github.com/parameja1/language-servers/commit/439a488fc95683ab0da2df18a5044d66b689f4ed))
* make file collection for indexing non blocking ([#1701](https://github.com/parameja1/language-servers/issues/1701)) ([036efde](https://github.com/parameja1/language-servers/commit/036efdead9c68c4ee6e6590ee2e877ace4cabce6))
* Make the classifier of auto trigger output the same score as the IDE auto trigger classifier ([#1930](https://github.com/parameja1/language-servers/issues/1930)) ([be3231f](https://github.com/parameja1/language-servers/commit/be3231f27d545daf137df149e5f9fd23042c82a9))
* missing handle connection expired error for inline suggestions ([#1373](https://github.com/parameja1/language-servers/issues/1373)) ([05c7728](https://github.com/parameja1/language-servers/commit/05c772821e60ba8a6b066b26ca6811d3d9c55455))
* model doesn't update in session for new tabs ([#1506](https://github.com/parameja1/language-servers/issues/1506)) ([89aa1ef](https://github.com/parameja1/language-servers/commit/89aa1efade5ff9421eaf8c66db55d0a9fb8bd283))
* move generateAssistant request log statement ([#1379](https://github.com/parameja1/language-servers/issues/1379)) ([e258409](https://github.com/parameja1/language-servers/commit/e258409fb811769aa700046568c269622daf1ec9))
* move ignore walk from app/package.json to server/package.json ([#1748](https://github.com/parameja1/language-servers/issues/1748)) ([6f88dad](https://github.com/parameja1/language-servers/commit/6f88dad8423aeccc7668e644d33323037fc7a90c))
* move network commands out of ro category ([#1985](https://github.com/parameja1/language-servers/issues/1985)) ([3cc9fd9](https://github.com/parameja1/language-servers/commit/3cc9fd91ae2f78ee28e224d5390ba78509de3615))
* only do render on partial results for fsWrite ([#1354](https://github.com/parameja1/language-servers/issues/1354)) ([9931592](https://github.com/parameja1/language-servers/commit/993159293edc32f7dc5bd0cfb999562ffee830ed))
* outdated history when trimming happens, add missing metric for compaction ([#2047](https://github.com/parameja1/language-servers/issues/2047)) ([8390f66](https://github.com/parameja1/language-servers/commit/8390f6686c804dfbeff91018635df21e9dd89236))
* **paidtier:** Upgrade success message is unreliable ([#1602](https://github.com/parameja1/language-servers/issues/1602)) ([e0b274f](https://github.com/parameja1/language-servers/commit/e0b274ffee2e091e09574de03fe38e0a234e2f6e))
* permission check ux changes ([#1290](https://github.com/parameja1/language-servers/issues/1290)) ([170113f](https://github.com/parameja1/language-servers/commit/170113f97eccf7827cfc72da33d9dc9c7e4afb3f))
* pinned `@Code` symbols do not persist between IDE sessions ([#1887](https://github.com/parameja1/language-servers/issues/1887)) ([b5c715f](https://github.com/parameja1/language-servers/commit/b5c715ff5ee303c2d48ffb9c1c6c98a9d985e2f1))
* prevent timeout messages from displaying ([#1282](https://github.com/parameja1/language-servers/issues/1282)) ([a154209](https://github.com/parameja1/language-servers/commit/a154209f0c2f16ab95eee4cf629676c811431011))
* properly tokenize command args using shlex.split() for Windows ([#1440](https://github.com/parameja1/language-servers/issues/1440)) ([9355003](https://github.com/parameja1/language-servers/commit/9355003f5feb030a7b3984122e180368bae29d06))
* put compaction feature behind a feature flag ([#1945](https://github.com/parameja1/language-servers/issues/1945)) ([51f4161](https://github.com/parameja1/language-servers/commit/51f4161571679408d6b11b61d70d8027097a6ef6))
* put streakLength under feature flag ([#1796](https://github.com/parameja1/language-servers/issues/1796)) ([dc4a8fd](https://github.com/parameja1/language-servers/commit/dc4a8fdd6e94fafe9b1dbe6cb1419c55a285df70))
* re-categorize error status code ([#1355](https://github.com/parameja1/language-servers/issues/1355)) ([a98a842](https://github.com/parameja1/language-servers/commit/a98a842fb5ac8d680e973d97058c22a49e5c3284))
* Reduce perceived latency of fsWrite. Show fsWrite errors in the UX  ([#1351](https://github.com/parameja1/language-servers/issues/1351)) ([f1e873b](https://github.com/parameja1/language-servers/commit/f1e873b95fbd119a0303ae1f234f9f1efa1fef56))
* regex should match workspace text in bold style and startLine can be 0 ([#1272](https://github.com/parameja1/language-servers/issues/1272)) ([16d6a9d](https://github.com/parameja1/language-servers/commit/16d6a9d6bc6b23bfda09fb08147e76941809e3f1))
* Relaxed MCP server naming constraints to align with Q CLI standards ([#1610](https://github.com/parameja1/language-servers/issues/1610)) ([52fd0ff](https://github.com/parameja1/language-servers/commit/52fd0ff5acbb699ec16edbdecb1e6ecc5b84a33b))
* remove /manage options from the chat prompt popup ([#1650](https://github.com/parameja1/language-servers/issues/1650)) ([d9de456](https://github.com/parameja1/language-servers/commit/d9de4565bf1848d91693f1e44b5cbb478ae75d44))
* remove edit cache logic ([#2079](https://github.com/parameja1/language-servers/issues/2079)) ([9bc5b9c](https://github.com/parameja1/language-servers/commit/9bc5b9c1d77e5fee6f518f7f5016d3a0043a5a77))
* remove hardcoded EDITS predictionTypes for trigger on acceptance ([#1937](https://github.com/parameja1/language-servers/issues/1937)) ([8ef7986](https://github.com/parameja1/language-servers/commit/8ef7986424dc4ced8e7414c1378dfca872150fb4))
* remove hardcoding of builtIn and builtInWrite tools ([#1774](https://github.com/parameja1/language-servers/issues/1774)) ([fc8cc10](https://github.com/parameja1/language-servers/commit/fc8cc106617249c81a5c48601418b5f31451865c))
* remove limit on agentic loop ([#1367](https://github.com/parameja1/language-servers/issues/1367)) ([5943222](https://github.com/parameja1/language-servers/commit/59432220ba9495d3e5cdfd2d42321f412d1f2b13))
* remove malicious characters from MCP tool description ([#1977](https://github.com/parameja1/language-servers/issues/1977)) ([64d4e3e](https://github.com/parameja1/language-servers/commit/64d4e3ebade706b01d256682cafe8d4ff8b85f41))
* remove malicious characters from prompt input ([#2009](https://github.com/parameja1/language-servers/issues/2009)) ([bf8a1e6](https://github.com/parameja1/language-servers/commit/bf8a1e6136801532132f2bf82def4ca5bf49c82f))
* remove redundent thinking... for file operations ([#1839](https://github.com/parameja1/language-servers/issues/1839)) ([0078602](https://github.com/parameja1/language-servers/commit/00786023c9c257c9bb8066c36715864b32b4e069))
* remove the tool from the mapping after user set incase the conflict ([#1609](https://github.com/parameja1/language-servers/issues/1609)) ([48b996d](https://github.com/parameja1/language-servers/commit/48b996d1a325e2f2cd4a843bf687f1c2c7cc4df4))
* rename fuzzySearch tool name ([#1512](https://github.com/parameja1/language-servers/issues/1512)) ([4d65c92](https://github.com/parameja1/language-servers/commit/4d65c92c87fb1138fcaa6f023518122823b60ba4))
* Render timeout error, JSON parse error, cancellation to the in progress fs.write UI ([#1382](https://github.com/parameja1/language-servers/issues/1382)) ([f930297](https://github.com/parameja1/language-servers/commit/f9302976d9e916a88daac546efb8acba45c5a66e))
* reorder cancellation operations ([#1478](https://github.com/parameja1/language-servers/issues/1478)) ([0d392a7](https://github.com/parameja1/language-servers/commit/0d392a7996f6430d13e4d7171e320d5b0b0aaf43))
* replace cancel with stop ([#1935](https://github.com/parameja1/language-servers/issues/1935)) ([2f51923](https://github.com/parameja1/language-servers/commit/2f51923f9d3497469c70162235482b569e2d796e))
* replace thinking with working and replace stop with cancel ([#1922](https://github.com/parameja1/language-servers/issues/1922)) ([371e731](https://github.com/parameja1/language-servers/commit/371e731545f7572d3356d061cd8b94db35e4c333))
* return QModelResponse as a response not an error ([#1523](https://github.com/parameja1/language-servers/issues/1523)) ([5d2b3ec](https://github.com/parameja1/language-servers/commit/5d2b3ecf13ab4bbcbab35a6a9c5788048170f09d))
* Revert status code convertion ([#1370](https://github.com/parameja1/language-servers/issues/1370)) ([73e0c5b](https://github.com/parameja1/language-servers/commit/73e0c5b93861ed48c075588cd99e716066c2bc95))
* sanitize request input ([#2025](https://github.com/parameja1/language-servers/issues/2025)) ([7c0efd7](https://github.com/parameja1/language-servers/commit/7c0efd73d5e9a0e3f42d143a10c16782f6e35db8))
* send AmazonQ.md as a rule, do not automatically send README.md ([#1688](https://github.com/parameja1/language-servers/issues/1688)) ([c7a0656](https://github.com/parameja1/language-servers/commit/c7a0656ae3624082062f697b1564e589e943e4a8))
* separate executeBash toolspec for mac and windows ([#1727](https://github.com/parameja1/language-servers/issues/1727)) ([33e0e4b](https://github.com/parameja1/language-servers/commit/33e0e4b2347e858ccb0c82c333aeaa8938b24c22))
* Set `source` parameter chat request context to 'IDE' ([#1407](https://github.com/parameja1/language-servers/issues/1407)) ([c8d6edf](https://github.com/parameja1/language-servers/commit/c8d6edf58e824c994ffe5c10bb970665375e0eb7))
* set streamingClient timeout config ([#1283](https://github.com/parameja1/language-servers/issues/1283)) ([cc7680d](https://github.com/parameja1/language-servers/commit/cc7680da85c6528d5f54f347b7ce922ffbba25b0))
* setting shouldDisplayMessage to false for /agents ([#1811](https://github.com/parameja1/language-servers/issues/1811)) ([4a72cf7](https://github.com/parameja1/language-servers/commit/4a72cf7bbc9081f65c4e88c3ab42441a21ec6e03))
* should always trigger EDIT suggestion if triggering via acceptance ([#1826](https://github.com/parameja1/language-servers/issues/1826)) ([6c9e522](https://github.com/parameja1/language-servers/commit/6c9e5225a58d7cf43931d84e7ae63275d6f9c066))
* should keep reporting UTDE telemetry if there are still pending Edits suggestions ([#2051](https://github.com/parameja1/language-servers/issues/2051)) ([78c67b1](https://github.com/parameja1/language-servers/commit/78c67b1a29821f54006d160695e997870d17f3b5))
* should trigger edits if one of the following lines is non-empty ([#1915](https://github.com/parameja1/language-servers/issues/1915)) ([b298602](https://github.com/parameja1/language-servers/commit/b2986026293e26bff0cacbaf1554999c12fb429c))
* show tooltip for warning message and remove the warning text  ([#1259](https://github.com/parameja1/language-servers/issues/1259)) ([312b04d](https://github.com/parameja1/language-servers/commit/312b04dbde37fbf1a1cc5d8884d62728edbc2810))
* skip image sanitization ([#2031](https://github.com/parameja1/language-servers/issues/2031)) ([f02fc23](https://github.com/parameja1/language-servers/commit/f02fc231136940bd644c426d2b222ae2cba779c4))
* sometimes Enter does not auto trigger ([#2005](https://github.com/parameja1/language-servers/issues/2005)) ([c9af035](https://github.com/parameja1/language-servers/commit/c9af0353a6c6f3b2ca4eead02f19e8ab5ddb8ef1))
* SSPC dependency upload and watcher fixes ([#1377](https://github.com/parameja1/language-servers/issues/1377)) ([a5833fe](https://github.com/parameja1/language-servers/commit/a5833fea3488f2e31877b5677fd532f5415b339c))
* the new prompt wont stop the process properly ([#1404](https://github.com/parameja1/language-servers/issues/1404)) ([6e3ec9b](https://github.com/parameja1/language-servers/commit/6e3ec9b7483fee74563b735440789d4add9158e0))
* thinking doesn't get removed if response is empty ([#1699](https://github.com/parameja1/language-servers/issues/1699)) ([9a63c99](https://github.com/parameja1/language-servers/commit/9a63c99b3195c9da0f537980324998138f25a3fa))
* timeout only works for the first time in the loop ([#1675](https://github.com/parameja1/language-servers/issues/1675)) ([ab50985](https://github.com/parameja1/language-servers/commit/ab50985eb0dac1888769f7fb703aa8d6f50c1b89))
* treat `echo`/`find`/`grep` as mutating ([#1921](https://github.com/parameja1/language-servers/issues/1921)) ([ef801a3](https://github.com/parameja1/language-servers/commit/ef801a3b9c435c25899eaa3712cabf6d5c4b9922))
* truncate API payload ([#1368](https://github.com/parameja1/language-servers/issues/1368)) ([1120272](https://github.com/parameja1/language-servers/commit/112027253ca773e0b674c0527dd48c9ee8d9ddc4))
* Truncate API request context first, then truncate chat history ([#1372](https://github.com/parameja1/language-servers/issues/1372)) ([80fdbdf](https://github.com/parameja1/language-servers/commit/80fdbdfc27849e136b30d7a68727b3f53b03c8af))
* truncate userInputMessage to first 500k characters ([#1327](https://github.com/parameja1/language-servers/issues/1327)) ([d6f84db](https://github.com/parameja1/language-servers/commit/d6f84db58f59afe85351380d7fad5320a2889f1c))
* undefined path causing the loop to break ([#1718](https://github.com/parameja1/language-servers/issues/1718)) ([8e48b86](https://github.com/parameja1/language-servers/commit/8e48b866221c70c79156b714f036413816748b6c))
* update ChatHandlers before adding new types dependency ([#1925](https://github.com/parameja1/language-servers/issues/1925)) ([e94e581](https://github.com/parameja1/language-servers/commit/e94e581a00fb99d862527ee7b91bf37ef47f4013))
* update executeBash UI for failures during command existence check ([#1462](https://github.com/parameja1/language-servers/issues/1462)) ([7165301](https://github.com/parameja1/language-servers/commit/7165301ac8de36c34011d9fc8b066fa2fe3aff7e))
* update fileSearch toolSpec and implementation ([#1320](https://github.com/parameja1/language-servers/issues/1320)) ([4b18f25](https://github.com/parameja1/language-servers/commit/4b18f25dfb8595f18b2773dddaa5bfbc64cf519d))
* update fsReplace toolSpec to emphasize JSON array syntax ([#1751](https://github.com/parameja1/language-servers/issues/1751)) ([31f6994](https://github.com/parameja1/language-servers/commit/31f6994c25d2a24709fd7119463d1be269cd68b1))
* update ignore pattern of glob for sspc ([#1319](https://github.com/parameja1/language-servers/issues/1319)) ([6f56600](https://github.com/parameja1/language-servers/commit/6f566008a7b5b726418e3de535e55c63285de532))
* update listDirectory tool to output in tree-like format to reduce toolSize ([#1260](https://github.com/parameja1/language-servers/issues/1260)) ([becfee0](https://github.com/parameja1/language-servers/commit/becfee0d36e9e2a5fb5239c1e34cc6661ca01d94))
* update MCP tools implementation ([#1676](https://github.com/parameja1/language-servers/issues/1676)) ([51b7870](https://github.com/parameja1/language-servers/commit/51b7870d7144d593249a3da001b7f1047aa3b642))
* use absolute file path for shell ([#1871](https://github.com/parameja1/language-servers/issues/1871)) ([f863735](https://github.com/parameja1/language-servers/commit/f863735c8dc734a1af4b26fbe8b9c436a32c21ca))
* use document change events for auto trigger classifier input ([#1912](https://github.com/parameja1/language-servers/issues/1912)) ([2204da6](https://github.com/parameja1/language-servers/commit/2204da6193f2030ee546f61c969b1a664d8025e3))
* use fast glob streaming when collecting files ([#2003](https://github.com/parameja1/language-servers/issues/2003)) ([f7c0a0b](https://github.com/parameja1/language-servers/commit/f7c0a0b0ef9ce3ecd620acfef00e55745db3d71f))
* use new language server runtime ([#2023](https://github.com/parameja1/language-servers/issues/2023)) ([83ea1e4](https://github.com/parameja1/language-servers/commit/83ea1e42fe52990696eb9b878fa11e2c5331bec5))
* use NodeHttpHandler when configuring requestHandler ([#1670](https://github.com/parameja1/language-servers/issues/1670)) ([7b620a8](https://github.com/parameja1/language-servers/commit/7b620a82b7acb4fbdbb5b88661be661dd575d152))
* use updated version of vecLib and use local context controller to raise context command updates ([#1479](https://github.com/parameja1/language-servers/issues/1479)) ([6d4280d](https://github.com/parameja1/language-servers/commit/6d4280d1eb61d3b10674a0aa137ae6fd2f5446bf))
* when user add a new server, it would load global persona at first time ([#1667](https://github.com/parameja1/language-servers/issues/1667)) ([a3cf388](https://github.com/parameja1/language-servers/commit/a3cf3880d178ae74f2136abb798f6a8f08fe76e2))
* wrap load chats on ready in try-catch ([#1289](https://github.com/parameja1/language-servers/issues/1289)) ([7de86f0](https://github.com/parameja1/language-servers/commit/7de86f01460c8615f60548d3bd27a87bbc03e6f8))


### Reverts

* adding files on VSC windows properly triggers reindexing ([#1820](https://github.com/parameja1/language-servers/issues/1820))" ([#1860](https://github.com/parameja1/language-servers/issues/1860)) ([423cdbc](https://github.com/parameja1/language-servers/commit/423cdbc48d9439e29ba69c37dc289a739f83475f))
* adding streakLength back for UserTriggerDecisionEvent ([#1877](https://github.com/parameja1/language-servers/issues/1877)) ([b199100](https://github.com/parameja1/language-servers/commit/b199100153aa0629890c49e12a56efbb9c627154))
* **amazonq:** bring back [#1684](https://github.com/parameja1/language-servers/issues/1684) ([#1697](https://github.com/parameja1/language-servers/issues/1697)) ([5e7aa76](https://github.com/parameja1/language-servers/commit/5e7aa76b6ebcf8e0a7489d3574cc14ed3d0ceebe))
* **amazonq:** bring back [#1689](https://github.com/parameja1/language-servers/issues/1689) ([5b84b0e](https://github.com/parameja1/language-servers/commit/5b84b0e4c42c344d91ef9c99a04d3a2671221aa1))
* **amazonq:** fix filter languages at workspace context server onDeleteFiles ([403c26a](https://github.com/parameja1/language-servers/commit/403c26a91f25d0035d92bfd21835b747a0dbafce))
* **amazonq:** nep cherrypick codewhispererService.ts ([#1689](https://github.com/parameja1/language-servers/issues/1689))" ([#1692](https://github.com/parameja1/language-servers/issues/1692)) ([69f1071](https://github.com/parameja1/language-servers/commit/69f10717c2eff8d4479ffa8a18220e15c03f865d))
* fix adding files on windows properly triggers reindexing ([#1743](https://github.com/parameja1/language-servers/issues/1743)) ([08d15e6](https://github.com/parameja1/language-servers/commit/08d15e67e1ff690dab8bf2dca5c0cf977afc0ba9))
* fix(amazonq): always restore chat tabs when onReady is received ([#1524](https://github.com/parameja1/language-servers/issues/1524)) ([#1536](https://github.com/parameja1/language-servers/issues/1536)) ([60b3b63](https://github.com/parameja1/language-servers/commit/60b3b63ded17e81e3dc12ff0f14b652bdff01667))
* Revert "fix: adding files on windows properly triggers reindexing ([#1755](https://github.com/parameja1/language-servers/issues/1755))" ([#1794](https://github.com/parameja1/language-servers/issues/1794)) ([bb4fb25](https://github.com/parameja1/language-servers/commit/bb4fb25e3e8c9b0a99b75cde08e9617053d69993))
* revert for all commits for emergency deployment ([#1966](https://github.com/parameja1/language-servers/issues/1966)) ([519f75d](https://github.com/parameja1/language-servers/commit/519f75d22466b72702793b4f1d1ed846c02bbd14))
* revert: adding files on VSC windows properly triggers reindexing ([#18](https://github.com/parameja1/language-servers/issues/18)&" ([#1862](https://github.com/parameja1/language-servers/issues/1862)) ([8e0c88b](https://github.com/parameja1/language-servers/commit/8e0c88b91d4f04e3209bbe35ee5678793c94b0f1))
* use cw streaming client from npm ([#1552](https://github.com/parameja1/language-servers/issues/1552)) ([788d8ed](https://github.com/parameja1/language-servers/commit/788d8ed58f828b16ddce9029b8d640ed1fe885bc))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @aws/lsp-core bumped from ^0.0.13 to ^0.0.14
</details>

<details><summary>lsp-core: 0.0.14</summary>

## [0.0.14](https://github.com/parameja1/language-servers/compare/lsp-core/v0.0.13...lsp-core/v0.0.14) (2025-08-08)


### Bug Fixes

* add proper encoding support for shell output ([#1903](https://github.com/parameja1/language-servers/issues/1903)) ([44a6d62](https://github.com/parameja1/language-servers/commit/44a6d629af7702662a02f384a6a542c0d72ccc39))
* **amazonq:** add handling for relative paths for isInWorkspace ([#1801](https://github.com/parameja1/language-servers/issues/1801)) ([3c273a7](https://github.com/parameja1/language-servers/commit/3c273a7aeac88a7afe40abaf490bc0950e517c01))
* **amazonq:** Use common utility to determine workspaceFolders and fix tests ([#1353](https://github.com/parameja1/language-servers/issues/1353)) ([483f532](https://github.com/parameja1/language-servers/commit/483f532b940d3ff2e914c0824f7501c3fe6a6235))
* **amazonq:** workspace files being tagged as out of workspace issue ([#1726](https://github.com/parameja1/language-servers/issues/1726)) ([4bd9aea](https://github.com/parameja1/language-servers/commit/4bd9aeab439d15dc425634b14470fd3c67986c4a))
* update fileSearch toolSpec and implementation ([#1320](https://github.com/parameja1/language-servers/issues/1320)) ([4b18f25](https://github.com/parameja1/language-servers/commit/4b18f25dfb8595f18b2773dddaa5bfbc64cf519d))
* update listDirectory tool to output in tree-like format to reduce toolSize ([#1260](https://github.com/parameja1/language-servers/issues/1260)) ([becfee0](https://github.com/parameja1/language-servers/commit/becfee0d36e9e2a5fb5239c1e34cc6661ca01d94))
* use document change events for auto trigger classifier input ([#1912](https://github.com/parameja1/language-servers/issues/1912)) ([2204da6](https://github.com/parameja1/language-servers/commit/2204da6193f2030ee546f61c969b1a664d8025e3))
* use new language server runtime ([#2023](https://github.com/parameja1/language-servers/issues/2023)) ([83ea1e4](https://github.com/parameja1/language-servers/commit/83ea1e42fe52990696eb9b878fa11e2c5331bec5))
</details>

<details><summary>lsp-json: 0.1.18</summary>

## [0.1.18](https://github.com/parameja1/language-servers/compare/lsp-json/v0.1.17...lsp-json/v0.1.18) (2025-08-08)


### Features

* add C8 test coverage support ([#1567](https://github.com/parameja1/language-servers/issues/1567)) ([eee5048](https://github.com/parameja1/language-servers/commit/eee5048c783ffc300073865d391372d5a583365c))
* add client side ide diagnostics to telemetry event ([#1768](https://github.com/parameja1/language-servers/issues/1768)) ([d08fc6c](https://github.com/parameja1/language-servers/commit/d08fc6cccb9238cef9c2ba485e116c0516839537))
* adding mcp servers feature to the language-server ([#1544](https://github.com/parameja1/language-servers/issues/1544)) ([f37bf5f](https://github.com/parameja1/language-servers/commit/f37bf5f91921d7611c124de6d54dd6ec653038c6))
* **amazonq:** pinned context and rules ([#1663](https://github.com/parameja1/language-servers/issues/1663)) ([25e7a5a](https://github.com/parameja1/language-servers/commit/25e7a5ab8b6630525a4fd6acc0524f67f00af817))


### Bug Fixes

* **amazonq:** Use common utility to determine workspaceFolders and fix tests ([#1353](https://github.com/parameja1/language-servers/issues/1353)) ([483f532](https://github.com/parameja1/language-servers/commit/483f532b940d3ff2e914c0824f7501c3fe6a6235))
* bump runtimes and fix broken test ([#1323](https://github.com/parameja1/language-servers/issues/1323)) ([7d1a7b9](https://github.com/parameja1/language-servers/commit/7d1a7b9700ee2cc154dfe357ebbb62597d3f1582))
* ensure local index server updates with workspaceChangeEvent and bump runtimes ([#1424](https://github.com/parameja1/language-servers/issues/1424)) ([9babbb6](https://github.com/parameja1/language-servers/commit/9babbb643daa2893454dbc977d3802822b2c0aa6))
* use document change events for auto trigger classifier input ([#1912](https://github.com/parameja1/language-servers/issues/1912)) ([2204da6](https://github.com/parameja1/language-servers/commit/2204da6193f2030ee546f61c969b1a664d8025e3))
* use new language server runtime ([#2023](https://github.com/parameja1/language-servers/issues/2023)) ([83ea1e4](https://github.com/parameja1/language-servers/commit/83ea1e42fe52990696eb9b878fa11e2c5331bec5))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @aws/lsp-core bumped from ^0.0.13 to ^0.0.14
</details>

<details><summary>lsp-partiql: 0.0.17</summary>

## [0.0.17](https://github.com/parameja1/language-servers/compare/lsp-partiql/v0.0.16...lsp-partiql/v0.0.17) (2025-08-08)


### Features

* add client side ide diagnostics to telemetry event ([#1768](https://github.com/parameja1/language-servers/issues/1768)) ([d08fc6c](https://github.com/parameja1/language-servers/commit/d08fc6cccb9238cef9c2ba485e116c0516839537))
* adding mcp servers feature to the language-server ([#1544](https://github.com/parameja1/language-servers/issues/1544)) ([f37bf5f](https://github.com/parameja1/language-servers/commit/f37bf5f91921d7611c124de6d54dd6ec653038c6))
* **amazonq:** pinned context and rules ([#1663](https://github.com/parameja1/language-servers/issues/1663)) ([25e7a5a](https://github.com/parameja1/language-servers/commit/25e7a5ab8b6630525a4fd6acc0524f67f00af817))


### Bug Fixes

* **amazonq:** Use common utility to determine workspaceFolders and fix tests ([#1353](https://github.com/parameja1/language-servers/issues/1353)) ([483f532](https://github.com/parameja1/language-servers/commit/483f532b940d3ff2e914c0824f7501c3fe6a6235))
* bump runtimes and fix broken test ([#1323](https://github.com/parameja1/language-servers/issues/1323)) ([7d1a7b9](https://github.com/parameja1/language-servers/commit/7d1a7b9700ee2cc154dfe357ebbb62597d3f1582))
* ensure local index server updates with workspaceChangeEvent and bump runtimes ([#1424](https://github.com/parameja1/language-servers/issues/1424)) ([9babbb6](https://github.com/parameja1/language-servers/commit/9babbb643daa2893454dbc977d3802822b2c0aa6))
* use document change events for auto trigger classifier input ([#1912](https://github.com/parameja1/language-servers/issues/1912)) ([2204da6](https://github.com/parameja1/language-servers/commit/2204da6193f2030ee546f61c969b1a664d8025e3))
* use new language server runtime ([#2023](https://github.com/parameja1/language-servers/issues/2023)) ([83ea1e4](https://github.com/parameja1/language-servers/commit/83ea1e42fe52990696eb9b878fa11e2c5331bec5))
</details>

<details><summary>lsp-yaml: 0.1.18</summary>

## [0.1.18](https://github.com/parameja1/language-servers/compare/lsp-yaml/v0.1.17...lsp-yaml/v0.1.18) (2025-08-08)


### Features

* add client side ide diagnostics to telemetry event ([#1768](https://github.com/parameja1/language-servers/issues/1768)) ([d08fc6c](https://github.com/parameja1/language-servers/commit/d08fc6cccb9238cef9c2ba485e116c0516839537))
* adding mcp servers feature to the language-server ([#1544](https://github.com/parameja1/language-servers/issues/1544)) ([f37bf5f](https://github.com/parameja1/language-servers/commit/f37bf5f91921d7611c124de6d54dd6ec653038c6))
* **amazonq:** pinned context and rules ([#1663](https://github.com/parameja1/language-servers/issues/1663)) ([25e7a5a](https://github.com/parameja1/language-servers/commit/25e7a5ab8b6630525a4fd6acc0524f67f00af817))


### Bug Fixes

* **amazonq:** Use common utility to determine workspaceFolders and fix tests ([#1353](https://github.com/parameja1/language-servers/issues/1353)) ([483f532](https://github.com/parameja1/language-servers/commit/483f532b940d3ff2e914c0824f7501c3fe6a6235))
* bump runtimes and fix broken test ([#1323](https://github.com/parameja1/language-servers/issues/1323)) ([7d1a7b9](https://github.com/parameja1/language-servers/commit/7d1a7b9700ee2cc154dfe357ebbb62597d3f1582))
* ensure local index server updates with workspaceChangeEvent and bump runtimes ([#1424](https://github.com/parameja1/language-servers/issues/1424)) ([9babbb6](https://github.com/parameja1/language-servers/commit/9babbb643daa2893454dbc977d3802822b2c0aa6))
* use document change events for auto trigger classifier input ([#1912](https://github.com/parameja1/language-servers/issues/1912)) ([2204da6](https://github.com/parameja1/language-servers/commit/2204da6193f2030ee546f61c969b1a664d8025e3))
* use new language server runtime ([#2023](https://github.com/parameja1/language-servers/issues/2023)) ([83ea1e4](https://github.com/parameja1/language-servers/commit/83ea1e42fe52990696eb9b878fa11e2c5331bec5))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @aws/lsp-core bumped from ^0.0.13 to ^0.0.14
</details>

---
This PR was generated with [Release Please](https://github.com/googleapis/release-please) bot. When you are ready to release these changes, merge this PR.

**Blocking GitHub Checks Issue:** if GitHub checks do not run, close and immediately re-open this PR manually.