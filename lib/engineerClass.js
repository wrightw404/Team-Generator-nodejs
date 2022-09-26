const Employee = require('./employeeClass');

class engineer extends Employee {
    constructor(name, ID, email, github){
        super(name, ID, email);

        this.github = github; 
    }
getgitHub(){
    return this.github;
}
getRole(){
    return "engineer"
}
}
module.exports = engineer;