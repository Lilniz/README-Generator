// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// An array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            name: "title",
            message: "What is your project title for your repository?"
        },
        {
            name: "description",
            message: "Write a general description of your application."
        },
        {
            name: "installInfo",
            message: "How do you install this application?"
        },
        {
            name: "usageInfo",
            message: "How do you begin this application?"
        },
        {
            name: "contribGuide",
            message: "How can others contribute to the application?"
        },
        {
            name: "testInstruct",
            message: "How does one test the application?"
        },
        {
            type: "list",
            name: "license",
            message: "Choose which license you want to use for your application.",
            choices: [
                "MIT", "CC0", "Apache", "ISC", "Nill"
            ],
        },
        {
            name: "gitUsername",
            message: "Please enter your GitHub username!"
        },
        {
            name: "email",
            message: "Please enter your email address!"
        },

    ]).then((responses) => {
        let markdown = generateMarkdown(responses)
        writeToFile("./Dist/readme.md", markdown);
    })
};

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => console.log(err))
}

// Function to initialize app
function init() {questions() }

// Function call to initialize app
init();