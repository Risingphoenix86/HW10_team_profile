const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Kyle Lux', 8965, 'kyleslux86@gmail.com', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Kyle Lux', 8965, 'kyleslux86@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 