// Import inquirer module for user prompts.
const inquirer = require('inquirer');
// Destructure and import the shape classes from the shapes module.
const { Triangle, Circle, Square } = require('./lib/shapes');
// Destructure and import the SVG class from the svg module.
const { SVG } = require("./lib/svg");
// Destructure and import the writeFile method from the fs/promises module for writing to files.
const { writeFile } = require("fs/promises");

// Function to prompt user for details about the logo they wish to generate.
function getLogoDetails() {
    // Use inquirer to prompt the user with a series of questions.
    return inquirer.prompt([
        {
            // Input type for text.
            type: "input",
            // Name to reference the answer later.
            name: "text",
            // Message displayed to the user.
            message: "Enter text for logo. (up to 3 characters)",
            // Validate that the entered text is up to 3 characters long.
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

// Function to generate an SVG logo based on user input.
function generateLogo() {
    // Call function to prompt the user for logo details.
    getLogoDetails()
        .then(({ text, textColor, shape, shapeColor }) => {
            // Declare a variable to hold the selected shape instance.
            let logoShape;
            // Based on the shape selected by the user, instantiate the corresponding shape class.
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

            // Create a new SVG generator instance with the text, text color, and chosen shape.
            const svgGenerator = new SVG(text, textColor, logoShape);
            // Use the render method of the SVG instance and write the resulting SVG to 'logo.svg'.
            return writeFile('logo.svg', svgGenerator.render());
        })
        // If the logo generation is successful, inform the user.
        .then(() => {
            console.log("Generated logo");
        })
        // If there's an error, log it and inform the user of the failure.
        .catch((error) => {
            console.log(error);
            console.log("Unable to generate logo");
        });
}

// Start the logo generation process by calling the generateLogo function.
generateLogo();