// Define the base class for all shapes.
class Shape {
    // Constructor that initializes the color property of the shape.
    constructor(color) {
        // Assign the passed color to the instance's color property.
        this.color = color;
    }
}

// Define a Triangle class that extends the Shape class.
class Triangle extends Shape {
    // Method to generate the SVG representation of a triangle.
    render() {
        // Return the SVG string for a triangle filled with the instance's color.
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// Define a Circle class that extends the Shape class.
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

// Define a Square class that extends the Shape class.
class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
    }
}

// Export the defined shape classes so they can be used in other parts of the application.
module.exports = { Triangle, Circle, Square };
