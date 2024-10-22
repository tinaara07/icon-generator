
const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square, Ellipse } = require('./library/shapes');

// Function to generate SVG content
function generateSVG(shape, text, textColor, shapeColor) {
    let shapeSVG = '';
    if (shape === 'circle') {
     const circle = new Circle (shapeColor, 5)
        shapeSVG = circle.render();
    } else if (shape === 'triangle') {
        const triangle=new Triangle(shapeColor, 5)
        shapeSVG = triangle.render();
    } else if (shape === 'square') {
        const square= new Square(shapeColor,5)
        shapeSVG = square.render();
    } else if (shape === 'ellipse') {
        const ellipse = new Ellipse(shapeColor,5)
        shapeSVG = ellipse.render();
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