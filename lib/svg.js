class SVG {
    constructor(text, textColor, shape) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
    }

    render() {
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

module.exports = { SVG };