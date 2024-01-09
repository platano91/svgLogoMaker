// Class representing a Circle shape
class Circle {
    constructor(color) {
        this.color = color; // Sets the color of the circle
    }

    // Method to render the Circle shape as an SVG
    render(text, textColor) {
        // Returns the SVG string with a circle and text elements
        return `<svg><circle fill="${this.color}" /> <text fill="${textColor}">${text}</text></svg>`;
    }
}

// Class representing a Triangle shape
class Triangle {
    constructor(color = '') {
        this.color = color; // Sets the default color of the triangle
    }

    // Method to set the color of the triangle
    setColor(color) {
        this.color = color;
    }

    // Method to render the Triangle shape as an SVG
    render(text = '', textColor = '') {
        if (text === '' && textColor === '') {
            // Renders only the triangle if no text is provided
            return `<polygon points="150, 18, 244, 182, 56, 182" fill="${this.color}" />`;
        }
        // Renders the triangle with text if text is provided
        return `<svg><polygon points="150, 18, 244, 182, 56, 182" fill="${this.color}" /><text fill="${textColor}">${text}</text></svg>`;
    }
}

// Class representing a Square shape
class Square {
    constructor(color) {
        this.color = color; // Sets the color of the square
    }

    // Method to render the Square shape as an SVG
    render(text, textColor) {
        // Returns the SVG string with a square and text elements
        return `<svg><rect fill="${this.color}" /> <text fill="${textColor}">${text}</text></svg>`;
    }
}

// Exporting the classes for external use
module.exports = { Circle, Triangle, Square };
