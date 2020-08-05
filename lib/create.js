const inquirer = require('inquirer');
const chalk = require("chalk");
const fs = require("fs-extra");
const Creator = require('./Creator');

function create(appname) {
    const choices = [
        { name: `default ()`, value: `default` },
        { name: `Manually select features`, value: `manually` }
    ]
    inquirer
        .prompt([
        {
            type: 'list',
            name: 'preset',
            message: 'Please pick a preset:',
            choices,
        },
        ])
        .then(answers => {
            switch (answers.preset) {
                case 'default':
            
                break;
                case 'manually':
                    selectManually(appname);
                break;
                case 'config':

                break;

            }
        });
}

function selectManually(appname){
    inquirer.prompt([
        {
            name:'language',
            type: 'list',
            message:'Pick a language: ',
            choices: [
                'JavaScript',
                'TypeScript'
            ]
        },
        {
            name:'stateManagement',
            type: 'list',
            message:'Pick a state management: ',
            choices: [
                'Mobx',
                'Dva',
                `${chalk.grey('Skip')}`
            ]
        },
        {
            name:'cssPre',
            type: 'list',
            message:'Pick a CSS pre-processor: ',
            choices: [
                'LESS',
                'SCSS',
                'styled-components',
                `${chalk.grey('Skip')}`
            ]
        },
        {
            name:'design',
            type: 'list',
            message:'Pick a UI Design: ',
            choices: [
                'Ant Design',,
                `${chalk.grey('Skip')}`
            ]
        }
    ]).then(() => {

    })
}

create()

module.exports = create
