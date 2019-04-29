# WDP Team Project

## Project description

This project is an example of web store based on free PSD template created for web development learning purposes.

## Demo

https://lucid-heisenberg-a54431.netlify.com/

## Project initialisation

After cloning the project install all required packages using `npm install` command.

Then you can start your work by firing up `npm run watch` command.

All required source files are located in `src/` folder.

## NPM Scripts

There are 3 main scripts designed to increase the speed of your work:

- `build`: create a project from the files located in `src` folder
- `watch`: fire up `browser-sync`, it tracks all changes in `src` folder and remodel the project accordingly
- `code-quality`: automatically checks JS errors in `src` folder in compliance to the established conventions.

## Git Hooks

Project uses Git Hooks - it gives a possibility to execute scripts after or before some Git events.

It triggers `code-quality` script for all committed files after `git commit` command execution.

## Conventions and good practices

Branches should be named using the following format:

{project name/number}-{task number}

Each commit should contain project name, branch number and short description of your work.

Commits should follow naming conventions as below:

{project name/number}-{task number}-{short description}

## Usage

This project has been created for learning purposes. It will utilise your skills in HTML, CSS/SCSS, Bootstrap and JS/jQuery.

## Troubleshooting

Remember to add jQuery library if you want to tweak Bootstrap components.
