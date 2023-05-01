// Source file for new todos
'use strict;';

// Imports
import chalk from 'chalk';
import * as readline from 'readline';
import util from 'util';

/**
 * Prompts for input and returns what was entered
 * @param {*} question - prompt to display
 * @returns {string} - The input entered
 */
export async function prompt(question_prompt) {
	const read_line = readline.createInterface(process.stdin, process.stdout);
	const question = util.promisify(read_line.question).bind(read_line);
	const response = await question(question_prompt);
	read_line.close();
	return response;
}

/**
 * Creates a new 'todo' item
 * @param {object} Low db object used to save the new todo
 */
export async function newTodo(db) {
	const todo = await prompt(chalk.blue('Type in your todo\n'));
	if (todo && Array.isArray(db?.data?.todos)) {
		db.data.todos.push({ title: todo, complete: false });
		await db.write();
	}
	console.log(`New todo created: ${todo}`);
}
