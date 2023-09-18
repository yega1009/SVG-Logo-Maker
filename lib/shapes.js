class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="60" y="10" width="180" height="180 fill="${this.color}" />`;
    }
}

module.exports = {Triangle, Circle, Square};