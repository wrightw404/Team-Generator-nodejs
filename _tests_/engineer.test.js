const engineer = require('../lib/engineerClass');

const testEngineer = new engineer ('Will', '5047412', 'wrightw404@gmail.com', 'wrightw404');

test ('test if we can get the all of the constructor parameters', () => {
    expect(testEngineer.name).toBe('Will');
    expect(testEngineer.ID).toBe('5047412');
    expect(testEngineer.email).toBe('wrightw404@gmail.com');
    expect(testEngineer.github).toBe('wrightw404');
})

test ('test if we can get the value for getgitHub()', () => {
    expect(testEngineer.getgitHub()).toBe('wrightw404');
})

test ('test if we can get the value for getRole()', () => {
    expect(testEngineer.getRole()).toBe("engineer");
})