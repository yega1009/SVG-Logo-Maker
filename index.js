const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');
const { SVG } = require("./lib/svg");
const { writeFile } = require("fs/promises");

function getLogoDetails() {
    return inquirer.prompt([
        {
            type: "input",
            name: "text",
            message: "Enter text for logo. (up to 3 characters)",
            validate: input => (input.length > 0 && input.length <= 3) ? true : 'Text should be up to 3 characters only.',
        },
        {
            type: "input",
            name: "textColor",
            message: 'Enter the text color (color keyword or hexadecimal):'
        },
        {
            type: "list",
            name: "shape",
            message: "Select a shape:",
            choices: ["triangle", "circle", "square"],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (color keyword or hexadecimal):'
        }
    ]);
}

function generateLogo() {
    getLogoDetails()
        .then(({ text, textColor, shape, shapeColor }) => {
            let logoShape;
            switch (shape) {
                case "triangle":
                    logoShape = new Triangle();
                    break;
                case "circle":
                    logoShape = new Circle();
                    break;
                case "square":
                    logoShape = new Square();
                    break;
            }

            const svgGenerator = new SVG(text, textColor, logoShape);
            return writeFile('logo.svg', svgGenerator.render());
        })
        .then(() => {
            console.log("Generated logo");
        })
        .catch((error) => {
            console.log(error);
            console.log("Unable to generate logo");
        });
}

generateLogo();