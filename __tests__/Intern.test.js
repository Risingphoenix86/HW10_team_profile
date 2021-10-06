const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Kyle Lux', 90, 'kyleslux86@gmail.com', 'OSU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Kyle Lux', 90, 'kyleslux86@gmail.com', 'OSU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Kyle Lux', 90, 'kyleslux86@gmail.com.com', 'OSU');

    expect(intern.getRole()).toEqual("Intern");
}); 