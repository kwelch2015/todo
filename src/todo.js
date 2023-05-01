#!/usr/bin/env node
'use strict;';

// Imports
import { usage } from './commands/help.js';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { newTodo } from './commands/new.js';
import { getTodos } from './commands/get.js';
import { completeTodo } from './commands/complete.js';

// Initialize JSON DB
const db = new Low(new JSONFile('todo-db.json'), { todos: [] });
await db.read();

// Consts
const commands = {
	new: { name: 'new', args: 3 },
	get: { name: 'get', args: 3 },
	complete: { name: 'complete', args: 4 },
	help: { name: 'help', args: 3 }
};
const args = process.argv;
const MAX_ARGS = 4;
const MIN_ARGS = 3;
const COMMAND_INDEX = 2;
const COMPLETE_INDEX_ARG = 3;

function getCommand(numOfArgs, commandName) {
	let command = commands[commandName];
	if (command?.args !== numOfArgs) {
		throw new Error(
			`Invalid number of arguments provided for ${command.name}`
		);
	}
	return command;
}

async function processCommand() {
	try {
		// Quick check for number of arguments
		if (args.length < MIN_ARGS || args.length > MAX_ARGS) {
			throw Error('Invalid number of arguments');
		}

		// Get the command passed
		const command = getCommand(args.length, args[COMMAND_INDEX]);

		// Switch statement to handle the supported commands
		switch (command.name) {
			case commands.help.name:
				usage();
				break;
			case commands.new.name:
				await newTodo(db);
				break;
			case commands.get.name:
				getTodos(db);
				break;
			case commands.complete.name:
				await completeTodo(db, args[COMPLETE_INDEX_ARG]);
				break;
			default:
				// Default case; invalid command detected
				throw Error(`Invalid command passed - ${args[COMMAND_INDEX]}`);
		}
	} catch (err) {
		usage(err.message);
	}
}

await processCommand();
