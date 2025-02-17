# Description

You are a TypeScript programmer. You want to create a simple command line program called "todo". The application maintains a list of to do items. Todo items can be added, marked complete, removed and the entire list can be displayed.

# Functional Requirements

The program is a command line program. When it displays prompts for input or help, the text should be light blue. When it displays a listing of todos or the results from any command, the text should be green. When the program displays errors the text should be light red. The program must perform the following commands via the command line (each command is listed below and is expected to be an additional command line argument ):

- get - lists all todo entries stores. Each todo item should be listed on a line by themselves starting with a number representing the order the todo items were added in. If the todo item is complete, there should be check mark character displayed after the end of the todo item (put a space between the end of the todo item and the check mark.)
- new - creates a new todo. The program must prompt the user to enter in a text for the todo item. The todo text item must be 120 characters or less. If the user enters more than 120 characters then display an error stating that text entered exceed the limit. Once added the program should display a confirmation that it was successfully added. The todo ite must be added with the completed boolean flag set to false.
- complete - Completes a todo item. The program must prompt the user for the number of the todo item to complete (the numbers correspond to the ordered list displayed by the get command). If no number is entered or if the number does not match a valid todo item the program must display an error. If the number entered does match a todo item then the item must set a boolean flag on the todo item indicating it has been set. Once completed the program should display a confirmation message on successfully marking the todo item complete.
- remove - Removes a todo. The program must prompt the user for he number of the todo item to remove (again, the numbers correspond to the numbers of todo items when running the get command). If no number is entered or if the number does not match a valid todo item the program must display an error. If the number entered does match a todo item the program must prompt the user to confirm the removal (y to confirm, anything else to cancel). If confirmed, the todo item should be removed and a messge display confirming the deletion.
- help - Displays all supported command line arguments with a short phrase about what each command does. If no command line argument is specified when the program is run help is the default action to be taken.

# Tech Stack

- The program should be a NodeJS-based program written in TypeScript. 
- For node assume the latest version of Node v20. Use the latest version of TypeScript compatible with Node v20. 
- To persist the to do list use a SQLite-based database.
- Use TypeORM to access the SQLite DB.
- Use the npm module chalk to format text displayed to the user.
- Use ESLint with recommended settings for linting the code.
- Use Prettier with recommended settings for formatting the code (be sure to set the options for semi colons at the end each statement, use single quotes of string literals and to not use trailing commas).

# Code organization

- Each command argument should be handled with a function. 
- Each command argument function and any other code related to supporting the function should be in it's own file and the function should exported out as an ESM module.