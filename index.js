// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", 
        name: "title",
        message: "What's the title of your application?"
    }

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
