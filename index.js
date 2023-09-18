const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

function getLogoDetails() {
    return inquirer.prompt([
        {
            name: "text",
            type: "input",
            message: "Enter text for logo. (up to 3 characters)",
            validate: (text) => text.length <= 3 || "The text must be less or equal to 3 characters",
        },
        {
            name: "textColor",
            type: "input",
            message: "Enter color for text",
        },
        {
            name: "shape",
            type: "list",
            message: "Choose a shape for the logo",
            options: ["triangle", "circle", "square"],
        }
        {
            name: "shapeColor",
            type: "input",
            message: "Enter color for shape",
        }
    ]);
}
