const cypress = require('cypress');
const path = require('path');


const CYPRESS_TEST_FILES_PATH = './cypress/definitions';

const definitionsFolder = path.join(__dirname, '../', CYPRESS_TEST_FILES_PATH);

console.log(`definitionsFolder: ${definitionsFolder}`);
console.log('-----------');

module.exports = ({
    context: projectIntegrationFolder,
}) => {
    console.log(`projectIntegrationFolder: ${projectIntegrationFolder}`);
    const settingConfig = {
        configFile: false,
        pluginsFile: '',
        config: {
            baseUrl: 'http://localhost:8080',
            testFiles: '**/*.{feature,features}',
            ignoreTestFiles: ['*.js', '*.md'],
            viewportWidth: 1360,
            viewportHeight: 790,
            integrationFolder: projectIntegrationFolder,
        },
        stepDefinitions: definitionsFolder,
        // browser: 'chrome',
    };

    cypress.run(settingConfig)
        .then((results) => {
            console.log(`Finish.`)
            // console.log(results)
        })
        .catch((err) => {
            console.error(err)
        });
};