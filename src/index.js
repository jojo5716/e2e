#!/usr/bin/env ts-node-script

const childProcess = require('child_process');
const path = require('path');

const configFile = '../' + (process.env.CONFIG_FILE || 'protactor') + '.conf.js';
const config = require(configFile).config;


const NODE_COMMAND = 'node';
const CUCUMBER_BASE_COMMAND = './node_modules/.bin/cucumber-js';
const STEP_DEFINITIONS = './src/step-definitions/**/*.js';

module.exports = async ({
    projectPath
}) => {
    // const commandArgs = [CUCUMBER_BASE_COMMAND, '-r', projectPath, '-r', STEP_DEFINITIONS];
    const commandArgs = [CUCUMBER_BASE_COMMAND, projectPath];
    const env = {
        cwd: '.',
        stdio: ['ignore', 'pipe'],
        env: process.env,
    }
    const commandInstance = childProcess.spawn(NODE_COMMAND, commandArgs, env);

    commandInstance.stdout.on("data", data => {
        console.log(`stdout: ${data}`);
    });

    commandInstance.stderr.on("data", data => {
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