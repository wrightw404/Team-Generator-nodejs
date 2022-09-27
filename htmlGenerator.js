const engineer = require("./lib/engineerClass");

//function htmlGenerate
const htmlGenerate = (teamMembers) => {
    //empty array for html 
    const htmlArr = [];

    //manager function
    //mailto creates email form
    const createManager = manager => {
        var managerHTML = `<div class="card" style="width: 18rem;">
        <div class="card-header">
          ${manager.name}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.ID}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
          <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
      </div>`;
      htmlArr.push(managerHTML);
    }

    //engineer function 
    const createEngineer = engineer => {
        var engineerHTML = `<div class="card" style="width: 18rem;">
        <div class="card-header">
          ${engineer.name}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.ID}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineerHTML.email}</a></li>
          <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" target="_blank"</a>${engineer.github}</li>
        </ul>
      </div>`;
      htmlArr.push(engineerHTML);
    }

    //intern function 

}
    



module.exports = teamMembers => {
return`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
  </head>
  <body>
    ${htmlGenerate(teamMembers)}
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js" integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous"></script>
  </body>
</html>`
}