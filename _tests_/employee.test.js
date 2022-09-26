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
test ('test if we can get the value for getName', () => {
    expect(testEmployee.getName()).toBe('Will');
})

//test for getID()
test ('test if we can get the value for getID()', () => {
    expect(testEmployee.getID()).toBe('5047412');
})

//test for getEmail()
test ('test if we can get the value for getEmail()', () => {
    expect(testEmployee.getEmail()).toBe('wrightw404@gmail.com');
})

//test for getRole()
test ('test if we can get the value for getRole()', () => {
    expect(testEmployee.getRole()).toBe('employee');
})