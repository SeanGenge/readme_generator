// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ["What is your GitHub username?", "What is your email address?", "What is your project's name?", "Please write a short description of your project", "What kind of licence should your project have?", "What command should be run to install dependencies?", "What command should be run to run tests?", "What does the user need to know about using the repo?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data, err => {
        console.log(`An error occurred when generating readme: ${err}`);
    });
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
