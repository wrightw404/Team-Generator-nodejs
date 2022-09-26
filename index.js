const inquirer = require('inquirer');
const fs = require('fs'); 
//call the classes

//empty array for team 
const teamProfile = [];

const generateHTML = ({employee, manager, engineer, intern}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<title>Document</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
<div class="container">



</div>
</div>
</body>
</html>`;


const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "what is your name?",
            name: "name",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        },
        {
            type: "input",
            message: "what is your ID?",
            name: "ID",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        },
        {
            type: "input",
            message: "what is your email?",
            name: "email",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        },
        {
            type: "input",
            message: "what is your office number?",
            name: "officeNumber",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        }
    ])
    .then(input => {
        const newManager = new manager(input.name, input.ID, input.email, input.officeNumber);
        //push newManager to empty array 
        teamProfile.push(newManager);
        //call menu function
        menuQuestions();
    })
};

const menuQuestions = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "what is your name?",
            name: "menu",
            choices: ["Add an engineer", "Add an intern", "Finish building team"], 
        },
    ]).then(userInput => {
        switch(userInput.menu){
            case 'Add an engineer':
                engineerQuestions();
            break;
            case 'Add an intern':
                internQuestions();
            break;
            default:
                //need a build team function 
                
        }
    })
};

const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "what is your name?",
            name: "name",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        },
        {
            type: "input",
            message: "what is your ID?",
            name: "ID",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        },
        {
            type: "input",
            message: "what is your email?",
            name: "email",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        },
        {
            type: "input",
            message: "what is your Github username?",
            name: "github",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        }
    ])
};

const internQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "what is your name?",
            name: "name",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        },
        {
            type: "input",
            message: "what is your ID?",
            name: "ID",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        },
        {
            type: "input",
            message: "what is your email?",
            name: "email",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        },
        {
            type: "input",
            message: "where did you go to school?",
            name: "school",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        }
    ])
};