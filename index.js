// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');

const { Circle, Triangle, Square } = require('./lib/shapes');

// Function to prompt user for logo creation
function promptUser() {
    return inquirer.prompt([
        {
            // Prompt for text to be included in the logo
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: input => input.length <= 3 ? true : 'Please enter no more than three characters.'
        },
        {
            // Prompt for text color
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hexadecimal):',
            validate: input => /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i.test(input) || /^[a-zA-Z]+$/i.test(input) ? true : 'Please enter a valid color (keyword or hex).'
        },
        {
            // Prompt to choose the shape
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            // Prompt for shape color
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hexadecimal):',
            validate: input => /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i.test(input) || /^[a-zA-Z]+$/i.test(input) ? true : 'Please enter a valid color (keyword or hex).'
        }
    ]);
}

// Function to generate an SVG string based on user input
function generateSvg(data) {
    // Start the SVG string
    let svgString = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

    // Variable to store the SVG code for the chosen shape
    let shapeSVG = "";

    // Determine the SVG code for the shape based on user input
    switch (data.shape.toLowerCase()) {
        case 'circle':
            shapeSVG = `<circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />`;
            break;
        case 'square':
            shapeSVG = `<rect x="70" y="70" width="160" height="160" fill="${data.shapeColor}" />`;
            break;
        case 'triangle':
            shapeSVG = `<polygon points="150,40 250,160 50,160" fill="${data.shapeColor}" />`;
            break;
        default:
            // Handle invalid shape input
            throw new Error('Invalid shape');
    }

    // Add the shape and text to the SVG string
    svgString += shapeSVG;
    svgString += `<text x="150" y="120" text-anchor="middle" font-size="40" fill="${data.textColor}">${data.text}</text>`;
    svgString += "</svg>";

    // Return the complete SVG string
    return svgString;
}

// Function to create an SVG file based on user input
function createSVG(options) {
    try {
        // Generate the SVG content
        const svgContent = generateSvg(options);

        // Write the SVG content to a file
        fs.writeFile('./examples/logo.svg', svgContent, 'utf8', err => {
            if (err) {
                // Handle errors in file writing
                console.error('Error creating SVG file:', err);
                return;
            }
            console.log('Generated logo.svg');
        });
    } catch (error) {
        // Handle errors in SVG generation
        console.error('Error creating SVG:', error.message);
    }
}