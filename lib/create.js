const inquirer = require('inquirer');
const chalk = require("chalk");
const fs = require("fs-extra");
const ora = require('ora');
const path = require('path');
const util = require('util');
const downloadFile = require('./utils');

const exist = util.promisify(fs.stat)


const create = async (projectName) => {
    const projectExist = await exist(projectName).catch(err => {
        if(err.code !== 'ENOENT'){
            console.log(chalk.redBright.bold(err));
        }
    })
    // 文件已存在
    if (projectExist) {
        console.log(chalk.redBright.bold('❌ The file has exited！'))
        return
    }

    inquirer.prompt([
        {
            type: 'list' ,
            name: 'template',
            message: 'select the template you need',
            choices:[
                'react-template'
            ]
        }
    ]).then(answer => {
        let loading = ora('✨ downloading template...')
        loading.start()
        loading.color = 'yellow'

        downloadFile(projectName, answer).then(
            async () => {
                loading.succeed()
                console.log(chalk.green('🎉  Project initialization finished!'))
            },
            () => {
                loading.fail()
                console.log(chalk.redBright.bold('❌ download failed！'))
            }
        )
    })

}

module.exports = create

