// Importing the shape classes from the shapes module
const { Circle, Triangle, Square } = require('./shapes');

// Grouping tests for the shape classes
describe('Shape Classes', () => {
    // Tests related to the Circle class
    describe('Circle', () => {
        // Test to check the SVG rendering of the Circle class
        test('should correctly render SVG for Circle', () => {
            // Creating a new instance of Circle with color blue
            const circle = new Circle('blue');
            // Generating SVG for the circle with text 'A' and text color white
            const svg = circle.render('A', '#fff');
            // Checking if the generated SVG contains the expected elements and attributes
            expect(svg).toContain('<circle');
            expect(svg).toContain('fill="blue"');
            expect(svg).toContain('A</text>');
        });
    });

    // Tests related to the Triangle class
    describe('Triangle', () => {
        // Test to check the SVG rendering of the Triangle class
        test('should correctly render SVG for Triangle', () => {
            // Creating a new instance of Triangle with color green
            const triangle = new Triangle('green');
            // Generating SVG for the triangle with text 'B' and text color black
            const svg = triangle.render('B', '#000');
            // Checking if the generated SVG contains the expected elements and attributes
            expect(svg).toContain('<polygon');
            expect(svg).toContain('fill="green"');
            expect(svg).toContain('B</text>');
        });

        // Provided test focusing on the setColor method
        test('should render a Triangle with specific color using setColor', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18, 244, 182, 56, 182" fill="blue" />');
        });
    });

    // Tests related to the Square class
    describe('Square', () => {
        // Test to check the SVG rendering of the Square class
        test('should correctly render SVG for Square', () => {
            // Creating a new instance of Square with color red
            const square = new Square('red');
            // Generating SVG for the square with text 'C' and text color light grey
            const svg = square.render('C', '#ddd');
            // Checking if the generated SVG contains the expected elements and attributes
            expect(svg).toContain('<rect');
            expect(svg).toContain('fill="red"');
            expect(svg).toContain('C</text>');
        });
    });
});
