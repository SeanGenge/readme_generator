const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('./utils/generateMarkdown.js');

// The list of questions that will be asked
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    }, 
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }, 
    {
        type: "input",
        message: "What is your project's name?",
        name: "title"
    }, 
    {
        type: "input",
        message: "Please write a short description of your project:",
        name: "description"
    }, 
    {
        type: "list",
        message: "What kind of licence should your project have?",
        // Make it easier for the user to select the correct license
        choices: Object.keys(genMarkdown.licenses),
        name: "license"
    }, 
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation"
    }, 
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests"
    }, 
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    }, 
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing"
    }];

function writeToFile(fileName, data) {
    // Writes data to the readme file
    console.log("Generating a readme...");
    
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(`An error occurred when generating readme: ${err}`);
        }
        else {
            console.log("Readme file generated successfully")
        }
    });
}

function init() {
    inquirer.prompt(
        questions
    )
    .then(response => {
        let markdown = genMarkdown.generateMarkdown(response);
        // Has underscore to prevent overriding this projects readme file
        writeToFile("_README.md", markdown);
    })
    .catch(err => {
        console.log(err);
    });
}

// Function call to initialize app
init();
