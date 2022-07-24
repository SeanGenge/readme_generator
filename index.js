const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('./utils/generateMarkdown.js');

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
    console.log("Generating a readme...");
    
    fs.writeFile(filename, data, err => {
        console.log(`An error occurred when generating readme: ${err}`);
    });
}

function init() {
    console.log(Object.keys(genMarkdown.licenses));
    inquirer.prompt(
        questions
    )
    .then(response => {
        let markdown = genMarkdown.generateMarkdown(response);
        
        console.log(markdown);
    })
    .catch(err => {
        console.log(err);
    });
}

// Function call to initialize app
init();
