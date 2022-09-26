const employee = require('./employeeClass');

class engineer extends employee {
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