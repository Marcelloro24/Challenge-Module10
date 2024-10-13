const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('./lib/triangle.js');
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');

// Function to validate text input (up to 3 characters)
const validateText = (input) => {
  return input.length <= 3 || 'Please enter up to 3 characters.';
};

// Function to validate color input (keyword or hexadecimal)
const validateColor = (input) => {
  return /^#[0-9A-F]{6}$/i.test(input) || /^[a-zA-Z]+$/.test(input) || 'Please enter a valid color keyword or hexadecimal value.';
};

// Prompt user for input
const promptUser = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: validateText,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal):',
      validate: validateColor,
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal):',
      validate: validateColor,
    },
  ]);

  return answers;
};

// Function to generate logo based on user input
const generateLogo = (answers) => {
  let shape;
  switch (answers.shape) {
    case 'circle':
      shape = new Circle(answers.text, answers.textColor, answers.shapeColor);
      break;
    case 'triangle':
      shape = new Triangle(answers.text, answers.textColor, answers.shapeColor);
      break;
    case 'square':
      shape = new Square(answers.text, answers.textColor, answers.shapeColor);
      break;
  }
  return shape.render();
};

// Main function to run the application
const main = async () => {
  try {
    const userInput = await promptUser();
    const svgContent = generateLogo(userInput);
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};

// Run the application
main();
