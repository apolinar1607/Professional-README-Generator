// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
                    {
                    type: 'input',
                    name: 'projectTitle',
                    message: 'Title of Project:',
                    validate: (value) => {
                              if (value) {return true}
                              else {return 'Please enter a value to continue'};
                    }},
                    {
                    type: 'input',
                    name: 'description',
                    message: 'Project description: ',
                    validate: (value) => {
                        if (value) {return true}
                        else {return 'Please enter a value to continue'};
                    }},
                    {
                    type: 'input',
                    name: 'installation',
                    message: 'Required steps to install this project: ',
                    validate: (value) => {
                        if (value) {return true}
                        else {return 'Please enter a value to continue'};
                    }},
                    {
                    type: 'input',
                    name: 'usage',
                    message: 'Instruction to use the application: ',
                    validate: (value) => {
                        if (value) {return true}
                        else {return 'Please enter a value to continue'};
                    }},
                    {
                    type: 'list',
                    name: 'license',
                    message: 'License required: ',
                    choices: ['MIT', 'GPL', 'Apache', 'BSD', 'N/A'],
                    validate: (value) => {
                        if (value) {return true}
                        else {return 'Please select a value to continue'};
                    }},
                    {
                    type: 'input',
                    name: 'contribution',
                    message: 'List collaborators and useful resources for this application: ',
                    validate: (value) => {
                        if (value) {return true}
                        else {return 'Please enter a value to continue'};
                    }},
                    {
                    type: 'input',
                    name: 'testing',
                    message: 'How to test the application: ',
                    validate: (value) => {
                        if (value) {return true}
                        else {return 'Please enter a value to continue'};
                    }},
                    {
                    type: 'input',
                    name: 'userGithub',
                    message: 'Please explain how to test the application: ',
                    validate: (value) => {
                        if (value) {return true}
                        else {return 'Please enter a value to continue'};
                    }},
                  ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>
        err ? console.log(err) : console.log("File successfully generated!")
    );  
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data){
            writeToFile("README.md", generateMarkdown(data));
            console.log(data);
        })
}

// Function call to initialize app
init();
