const employee = require('../lib/employeeClass')
//create new employee with parameters 
const testEmployee = new employee ('Will', '5047412', 'wrightw404@gmail.com');

// test to see if you can get constructor parameters 

test ('test if we can get the constructor parameters', ()=> {
    expect(testEmployee.name).toBe('Will');
    expect(testEmployee.ID).toBe('5047412');
    expect(testEmployee.email).toBe('wrightw404@gmail.com');
});

//test for getName()


//test for getID()

//test for getEmail()

//test for getRole()