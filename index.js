// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", 
        name: "Redesigned-carnival",
        message: "What's the title of your application?"
    },
    {
        type: "input", 
        name: "This application can be useful for Node",
        message: "Enter a description of your application"
    },
    {
        type: "input", 
        name: "Install Inquirer version@8.2.4",
        message: "What do you need to install?"
    },
    {
        type: "input", 
        name: "usage",
        message: "How do you use this application?"
    },
    {
        type: "input", 
        name: "contributing",
        message: "Are there any contributors in the application?"
    },
    {
        type: "input", 
        name: "test",
        message: "Is there any testing software?"
    },
    {
        type: "input", 
        name: "ryansarath1",
        message: "Enter your Github"
    },
    {
        type: "input", 
        name: "sarathryan@yahoo.com",
        message: "Email"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName),data)
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then((datacomingback)=>{
        console.log(datacomingback)
        writeToFile("README.md",generateMarkdown({...datacomingback}))
    })
}

// Function call to initialize app
init();
