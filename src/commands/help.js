// source file for displaying help for todo
'use strict;';

// Imports
import chalk from 'chalk';

/**
 * Used to log errors to the console in red color
 * @param {string} error - error to display
 */
function errorLog(error) {
	const eLog = chalk.red(error);
	console.log(eLog);
}

/**
 * usage() displays the help guide
 */
export function usage(err = null) {
	const usageText = `
  todo helps you manage your "to do" tasks.

  usage:
    todo <command>

    valid commands:

    new       Create a new todo
    get       Retrieve your todos
    complete  Mark a todo as complete
    help      Print the usage guide
  `;
	if (err) {
		errorLog(err);
	}
	console.log(usageText);
}
