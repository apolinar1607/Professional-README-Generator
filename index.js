//Included packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//Array of questions for user input
const questions = [
                    {
                    type: 'input',
                    name: 'projectTitle',
                    message: 'Title of Project:',
                    validate: (value) => {
                              if (value) {return true}
                              else {return 'Please enter a valid value: '};
                    }},
                    {
                    type: 'input',
                    name: 'description',
                    message: 'Enter a description of the application: ',
                    validate: (value) => {
                        if (value) {return true}
                        else {return 'Please enter a valid value: '};
                    }},
                    {
                    type: 'input',
                    name: 'installation',
                    message: 'Required steps to install this project: ',
                    validate: (value) => {
                        if (value) {return true}
                        else {return 'Please enter a valid value:'};
                    }},
                    {
                    type: 'input',
                    name: 'usage',
                    message: 'Enter some usage information: ',
                    validate: (value) => {
                        if (value) {return true}
                        else {return 'Please enter a valid value: '};
                    }},
                   
                    {
                    type: 'input',
                    name: 'contribution',
                    message: 'Enter contribution guidelines: ',
                    validate: (value) => {
                        if (value) {return true}
                        else {return 'Please enter a value to continue'};
                    }},
                    {
                    type: 'input',
                    name: 'testing',
                    message: 'Steps to test the application: ',
                    validate: (value) => {
                        if (value) {return true}
                        else {return 'Please enter a value to continue'};
                    }},
                    {
                        type: 'list',
                        name: 'license',
                        message: 'Select license: ',
                        choices: ['MIT', 'GNU', 'Apache','N/A'],
                    },
                    {
                    type: 'input',
                    name: 'userGithub',
                    message: 'Enter your Github username: ',
                    validate: (value) => {
                        if (value) {return true}
                        else {return 'Please enter a valid Github username'};
                    }},
                    {
                    type: 'input',
                    name: 'emailAddress',
                    message: 'Enter your email address: ',
                    validate: (value) => {
                        if (value) {return true}
                        else {return 'Please enter a valid email address'};
                    }},
                  ]

//Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>
        err ? console.log(err) : console.log("File successfully generated!")
    );  
}

//Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data){
            writeToFile("README.md", generateMarkdown(data));
            console.log(data);
        })
}

// Function call to initialize app
init();
