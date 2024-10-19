
const fs = require('fs');
const inquirer = require('inquirer');

// Function to generate SVG content
function generateSVG(shape, text, textColor, shapeColor) {
    let shapeSVG = '';
    if (shape === 'circle') {
        shapeSVG = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" stroke="black" stoke-width="3"/>`;
    } else if (shape === 'triangle') {
        shapeSVG = `<polygon points="150,20 250,200 50,200" fill="${shapeColor}" stroke="black" stoke-width="3"/>`;
    } else if (shape === 'square') {
        shapeSVG = `<rect x="70" y="20" width="160" height="160" fill="${shapeColor}"stroke="black" stoke-width="3" />`;
    } else if (shape === 'ellipse') {
        shapeSVG = `<ellipse cx="150" cy="100" rx="80" ry="40" fill="${shapeColor}"stroke="black" stoke-width="3"/>`;
    }


    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeSVG}
        <text x="150" y="125" font-size="48" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
    `;
}

// Prompt user for input
inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: input => input.length <= 3 ? true : 'Text must be three characters or less.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color keyword or a hexadecimal number for the text color:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['circle', 'triangle', 'square','ellipse',]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword or a hexadecimal number for the shape color:'
    }
]).then(answers => {
    const svgContent = generateSVG(answers.shape, answers.text, answers.textColor, answers.shapeColor);
    fs.writeFileSync('icon.svg', svgContent);
    console.log('Generated icon.svg');
});