const intern = require('../lib/internClass');

const testIntern = new intern ('Will', '5047412', 'wrightw404@gmail.com', 'Michigan State');

test ('test if we can get the parameter values for the constructor', () => {
    expect(testIntern.name).toBe('Will');
    expect(testIntern.ID).toBe('5047412');
    expect(testIntern.email).toBe('wrightw404@gmail.com');
    expect(testIntern.school).toBe('Michigan State');
})

test ('test if we can get the value for getSchool()', () => {
    expect(testIntern.getSchool()).toBe('Michigan State');
})

test ('test if we can get the value for getRole()', () => {
    expect(testIntern.getRole()).toBe('intern');
})