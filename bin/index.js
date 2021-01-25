#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')

program
	.version(require('../package.json').version)
	.usage('<command> [options]')

program
	.command('create <app-name>')
	.description('Create a new React App')
	.action(name => {
		console.log(chalk.green(`IH CLI v${require('../package.json').version}`))
		const create = require('../lib/create');
		create(name);
	})

program
	.arguments('<command>')
	.action(cmd => {
		console.log(chalk.red(`❌ Unknown command ${chalk.yellow(cmd)}.`));
		program.outputHelp()
	})

program.parse(process.argv)

if (!program.args.length) {
	program.outputHelp()
}
