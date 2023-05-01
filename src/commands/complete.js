// Source file for completing todos
'use strict;';

// Imports
import chalk from 'chalk';

// Consts
const _1 = 1;

/**
 * Completes an existing 'todo' item
 * @param {object} Low db object used to save the new todo
 */
export async function completeTodo(db, index) {
	// Validate that the db object is valid
	if (!db || !Array.isArray(db?.data?.todos)) {
		throw new Error('Invalid db detected');
	}
	// Validate that index is valid
	if (!index || !Number.isInteger(Number.parseInt(index))) {
		throw new Error(`Index provided invalid integer - ${index}`);
	}
	const todo_index = Number.parseInt(index);
	const todo_count = db.data.todos.length;
	if (todo_index > todo_count || todo_index < _1) {
		throw new Error(`Index provided invalid - ${todo_index}`);
	}

	// Set the specified todo
	const todo = db.data.todos[todo_index - _1];
	todo.complete = true;
	await db.write();
	console.log(chalk.green(`todo ${todo_index}. "${todo.title}" completed.`));
}
