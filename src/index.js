#!/usr/bin/env/node
const childProcess = require('child_process');

const configFile = '../' + (process.env.CONFIG_FILE || 'protactor') + '.conf.js';
const config = require(configFile).config;


const NODE_COMMAND = 'node';
const CUCUMBER_BASE_COMMAND = './node_modules/.bin/cucumber-js';
const STEP_DEFINITIONS = './src/step-definitions';

module.exports = async ({
    projectPath
}) => {
    const commandArgs = [CUCUMBER_BASE_COMMAND, '--require', projectPath, STEP_DEFINITIONS];
    const commandInstance = childProcess.spawn(NODE_COMMAND, commandArgs);

    commandInstance.stdout.on("data", data => {
        console.log(`stdout: ${data}`);
    });

    commandInstance.stderr.on("data", data => {
        console.log(data);
        console.log(`stderr: ${data}`);
    });

    commandInstance.on('error', (error) => {
        console.log(error);
        console.log(`error: ${error.message}`);
    });

    commandInstance.on("close", code => {
        console.log(`child process exited with code ${code}`);
    });
}