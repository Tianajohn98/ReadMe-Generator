// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./src/generateMarkdown');

// TODO: Create an array of questions for user input
//Questions to ask the user 
const promptUser = () => {
    return inquirer.prompt([
    {
    
      type: "input" ,
      name: "github" ,
      message: "What is your Github username?",
     
    },

    { 
      type: "input" ,
      name: "title" ,
      message: "what is the name of your Github project?" ,

    },

    {
      type:"input" ,
      name: "email" ,
      message: "what is your email address?",

    },

    {
      type: "input",
      name: "description" ,
      message: "Please write a description of your project",
    },

    {

      type: "confirm",
      name: "instal",
      message: " Do you want to add any installation notes? ",

     },

     {
      type: "input",
      name: "installNotes",
      message: "Please add the installation notes",
       
     },
     { 
       type: "confirm",
       name: "usage",
       message: "Do you want to add any usage information?",
     },
     {
       type: "input",
       name: "usageInput" ,
       message: "Please add the usage information",

     },

     {  type: "confirm",
        name: "contribution" ,
        message: "Do you want to add any contributing notes?",
       


     }


]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


