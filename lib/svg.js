// Define an SVG class that will be used to create SVG containing text and a shape.
class SVG {
    // Constructor for the SVG class.
    constructor(text, textColor, shape) {
        // Set the provided text to the instance.
        this.text = text;
        // Set the provided text color to the instance.
        this.textColor = textColor;
        // Set the provided shape to the instance.
        this.shape = shape;
    }

    // Define the render method that will produce the SVG.
    render() {
        // Return a string representing the SVG content.
        return `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${this.shape.render()}
                <text x="150" y="105" font-family="Arial" font-size="24" text-anchor="middle" fill="${this.textColor}">
                    ${this.text}
                </text>
            </svg>
        `;
    }
}

// Export the SVG class so it can be imported and used in other modules.
module.exports = { SVG };
