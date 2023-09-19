// Import the SVG class for SVG generation.
const { SVG } = require('./svg');
// Import the shape classes: Circle, Triangle, and Square.
const { Circle, Triangle, Square } = require('./shapes');

// Describe block groups tests related to SVG rendering with different shapes.
describe('SVG', () => {

    // Define a test to check the rendering of an SVG containing a Circle shape.
    test('SVG render with Circle shape', () => {
        // Create a new Circle shape instance with the color green.
        const shape = new Circle('green');
        // Create a new SVG instance containing the text 'SVG', the color white for the text, and the Circle shape.
        const svgInstance = new SVG('SVG', 'white', shape);
        // Define the expected SVG output string for verification.
        const expectedOutput = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="green" />
                <text x="150" y="105" font-family="Arial" font-size="24" text-anchor="middle" fill="white">
                    SVG
                </text>
            </svg>
        `.trim();
        // Assert that the rendered SVG matches the expected output.
        expect(svgInstance.render().trim()).toEqual(expectedOutput);
    });

    // Define a test to check the rendering of an SVG containing a Triangle shape.
    test('SVG render with Triangle shape', () => {
        // Create a new Triangle shape instance with the color blue.
        const shape = new Triangle('blue');
        // Create a new SVG instance containing the text 'TXT', the color black for the text, and the Triangle shape.
        const svgInstance = new SVG('TXT', 'black', shape);
        // Define the expected SVG output string for verification.
        const expectedOutput = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150, 18 244, 182 56, 182" fill="blue" />
                <text x="150" y="105" font-family="Arial" font-size="24" text-anchor="middle" fill="black">
                    TXT
                </text>
            </svg>
        `.trim();
        // Assert that the rendered SVG matches the expected output.
        expect(svgInstance.render().trim()).toEqual(expectedOutput);
    });

    // Define a test to check the rendering of an SVG containing a Square shape.
    test('SVG render with Square shape', () => {
        // Create a new Square shape instance with the color yellow.
        const shape = new Square('yellow');
        // Create a new SVG instance containing the text 'ABC', the color purple for the text, and the Square shape.
        const svgInstance = new SVG('ABC', 'purple', shape);
        // Define the expected SVG output string for verification.
        const expectedOutput = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="50" width="200" height="100" fill="yellow" />
                <text x="150" y="105" font-family="Arial" font-size="24" text-anchor="middle" fill="purple">
                    ABC
                </text>
            </svg>
        `.trim();
        // Assert that the rendered SVG matches the expected output.
        expect(svgInstance.render().trim()).toEqual(expectedOutput);
    });

});
