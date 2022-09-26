const manager = require('../lib/managerClass');

const testManager = new manager ('Will', '5047412', 'wrightw404@gmail.com', '716');

test ('test if we can get the parameter values for the constructor', () => {
    expect(testManager.name).toBe('Will');
    expect(testManager.ID).toBe('5047412');
    expect(testManager.email).toBe('wrightw404@gmail.com');
    expect(testManager.officeNumber).toBe('716');
})

test ('test if we can get the value for getofficNumber()', () => {
    expect(testManager.getofficeNumber()).toBe('716'); 
})

test ('test if we can get the value of getRole()', () => {
    expect(testManager.getRole()).toBe('manager');
})