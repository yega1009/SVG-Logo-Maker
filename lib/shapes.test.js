// Importing the shape classes from the 'shapes' module
const { Triangle, Circle, Square } = require('./shapes');

// Describe block that groups tests related to shapes
describe('Shapes', () => {

    // Test for checking the SVG rendering of the Triangle shape
    test('Triangle render method', () => {
        // Creating an instance of the Triangle class with color 'blue'
        const shape = new Triangle('blue');
        // Expecting the render method of the triangle to produce the given SVG string
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

    // Test for checking the SVG rendering of the Circle shape
    test('Circle render method', () => {
        // Creating an instance of the Circle class with color 'red'
        const shape = new Circle('red');
        // Expecting the render method of the circle to produce the given SVG string
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });

    // Test for checking the SVG rendering of the Square shape
    test('Square render method', () => {
        // Creating an instance of the Square class with color 'green'
        const shape = new Square('green');
        // Expecting the render method of the square to produce the given SVG string
        expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="100" fill="green" />');
    });

});
