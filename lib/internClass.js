const employee = require('./employeeClass');

class intern extends employee {
    constructor(name, ID, email, school) {
        super(name, ID, email); 

        this.school = school; 
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "intern"
    }
}
module.exports = intern; 