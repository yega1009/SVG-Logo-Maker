const { SVG } = require('./svg');
const { Circle, Triangle, Square } = require('./shapes');

describe('SVG', () => {
    
    test('SVG render with Circle shape', () => {
        const shape = new Circle('green');
        const svgInstance = new SVG('SVG', 'white', shape);
        const expectedOutput = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="green" />
                <text x="150" y="105" font-family="Arial" font-size="24" text-anchor="middle" fill="white">
                    SVG
                </text>
            </svg>
        `.trim();
        expect(svgInstance.render().trim()).toEqual(expectedOutput);
    });

    test('SVG render with Triangle shape', () => {
        const shape = new Triangle('blue');
        const svgInstance = new SVG('TXT', 'black', shape);
        const expectedOutput = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150, 18 244, 182 56, 182" fill="blue" />
                <text x="150" y="105" font-family="Arial" font-size="24" text-anchor="middle" fill="black">
                    TXT
                </text>
            </svg>
        `.trim();
        expect(svgInstance.render().trim()).toEqual(expectedOutput);
    });

    test('SVG render with Square shape', () => {
        const shape = new Square('yellow');
        const svgInstance = new SVG('ABC', 'purple', shape);
        const expectedOutput = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="50" width="200" height="100" fill="yellow" />
                <text x="150" y="105" font-family="Arial" font-size="24" text-anchor="middle" fill="purple">
                    ABC
                </text>
            </svg>
        `.trim();
        expect(svgInstance.render().trim()).toEqual(expectedOutput);
    });

});
