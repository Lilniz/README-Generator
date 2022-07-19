// TODO: Include packages needed for this application
const inquirer = require("inquirer");
import inquirer from "inquirer";
const fs = require("fs");


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project title for your repository? (Required)"
        },
        {
            type: "checkbox",
            name: "license",
            message: "Choose which license you want to use for your applications.",
            choices: [
                "MIT", ""
            ],
        }
    
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

questions();

fs.writeFile('README.md', generateMarkdown(answers));