// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./src/generateMarkdown');

// TODO: Create an array of questions for user input
//Questions to ask the user 
const questions = [
    {
    
      type: "input" ,
      name: "github" ,
      message: "What is your Github username?",

    },

    { 
      




    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


console.log('hello node!');