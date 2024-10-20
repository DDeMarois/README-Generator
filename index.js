// TODO: Include packages needed for this application
import fs from 'fs';
import path from 'path';
import generateMarkdown from './utils/generateMarkdown.js';
import inquirer from 'inquirer';


// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
    },
    {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    },
    {
    type: 'input',
    name: 'title',
    message: 'What is you projects name?',
    },
    {
    type: 'input',
    name: 'description',
    message: 'Write a short description of your project',
    },
    {
    type: 'list',
    name: 'licesnse',
    message: 'What license will your project have?',
    choices: ['MIT', 'BSD 3', 'APACHE 2.0', 'GPL 3.0', 'None'],
    },
    {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies',
    default: 'npm i',
    },
    {
    type: 'input',
    name: 'test',
    message: 'What command can the user run to test your project?',
    default: 'npm test',
    },
    {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using this?',
    },
    {
    type: 'input',
    name: 'contributing',
    message: 'How can someone contribute to the project?',
    },   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({... inquirerResponses}));
    });
}

// Function call to initialize app
init();
