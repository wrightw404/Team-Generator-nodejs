const Employee = require('./employeeClass');

class Manager extends Employee {
    constructor(name, ID, email, officeNumber) {
        //super calls parent constructor i.e. employee constructor 
        super(name, ID, email);

        this.officeNumber = officeNumber;
    }
    getofficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "manager"
    }
}

module.exports = Manager;