// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
//Questions to ask the user 




const questions = [
   
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
      type: "input",
      name: "installation",
      message: "Please add the installation notes",
       
     },

     { 
       type: "confirm",
       name: "usage",
       message: "Do you want to add any usage information?",
     },
    
     {
      type: "input",
      name: "usageInfo",
      message: "Please add your usage info",
      when: function (answers) {
          return answers.usage;
      }



     },

     {  type: "confirm",
        name: "contribution" ,
        message: "Do you want to add any contributing notes?",
       

     },

     {
       type: "input",
       name: "contributing",
       message: "Please add your contributing notes",
       when: function (answers) {
           return answers.contributing;
       }

     },
     {
       type: "confirm",
       name: "test",
       message: "Do you want to add instructions for running tests?",

     },
     {
       type: "input",
       name: "tests",
       message: "Please add your instructions for running tests",
       when: function (answers){
           return answers.test;
       }
        
     },

     { 
      type: "rawlist",
      name: "license", 
      message:"Which open source license would you like to choose?",
      choices: ['Apache 2.0','BSD 2-Clause', 'BSD 3-Clause', 'GNU AGPLv3.0','MIT','Mozilla Public 2.0'],

     },
     


];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile("./demo/"+fileName,data,function(err) {

        if (err) {

            return console.log(err);
        }
        console.log ("Successfully wrote: " + fileName);
    })
}



// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("DemoREADME.md", generateMarkdown(data));
        
})

};



// Function call to initialize app
init();


