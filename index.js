const inquirer = require('inquirer');
const fs = require('fs'); 
const path = require('path');
//call the classes
const manager = require('./lib/managerClass');
const engineer = require('./lib/engineerClass');
const intern = require('./lib/internClass');
//const util = require('util');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');
//adds team.html to OUTPUT_DIR which is dist
const outputPath = path.join(OUTPUT_DIR, 'team.html')
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

${employee}
${manager}
${engineer}
${intern}


</div>
</div>
</body>
</html>`;


const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "what is the manager's name?",
            name: "name",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        },
        {
            type: "input",
            message: "what is manager's ID?",
            name: "ID",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        },
        {
            type: "input",
            message: "what is manager's email?",
            name: "email",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        },
        {
            type: "input",
            message: "what is manager's office number?",
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
            message: "Please select who you would like to add",
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
                teamBuidler();
                
        }
    })
};

const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "what is the engineer's name?",
            name: "name",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        },
        {
            type: "input",
            message: "what is the engineer's ID?",
            name: "ID",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        },
        {
            type: "input",
            message: "what is the engineeer's email?",
            name: "email",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        },
        {
            type: "input",
            message: "what is engineers Github username?",
            name: "github",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        }
    ])
    .then(input => {
        const newEngineer = new engineer(input.name, input.ID, input.email, input.github);
        //push newEngineer to empty array 
        teamProfile.push(newEngineer);
        //call menu function
        menuQuestions();
    })
};

const internQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "what is the intern's name?",
            name: "name",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        },
        {
            type: "input",
            message: "what is the intern's ID?",
            name: "ID",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        },
        {
            type: "input",
            message: "what is the intern's email?",
            name: "email",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        },
        {
            type: "input",
            message: "where did the intern go to school?",
            name: "school",
            validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
        }
    ])
    .then(input => {
        const newIntern = new intern(input.name, input.ID, input.email, input.school);
        //push newIntern to empty array 
        teamProfile.push(newIntern);
        //call menu function
        menuQuestions();
    })
};

const teamBuidler = () => {
   if (!fs.existsSync(OUTPUT_DIR)) {
    //builds directory if one isnt built
        fs.mkdirSync(OUTPUT_DIR)
   }
   // writes the file and takes in the name 'team.html' and creates the html with the newly added team members
   fs.writeFileSync(outputPath, generateHTML(teamProfile));
}

//starts applications 
managerQuestions();