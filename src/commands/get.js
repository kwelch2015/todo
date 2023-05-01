// Source file for new todos
'use strict;';

// Imports
import chalk from 'chalk';

/**
 * Get a new 'todo' item
 * @param {object} Low db object used to get todos
 */
export function getTodos(db) {
	if (db && Array.isArray(db?.data?.todos)) {
		let todo_count = 1;
		db.data.todos.forEach((todo) => {
			let complete = todo.complete ? ' ✔ ' : '';
			console.log(
				chalk.green(`${todo_count++}. ${todo.title} ${complete}`)
			);
		});
	}
}
