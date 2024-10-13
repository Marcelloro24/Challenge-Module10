# Challenge-Module10: SVG Logo Maker

## Description

This project is an SVG Logo Maker, developed as part of Challenge Module 10. It's a command-line application that allows users to generate simple logos for their projects. The application prompts users for text, colors, and shapes, then generates an SVG file based on their choices.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [License](#license)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies (inquirer).

## Usage

1. Open your terminal and navigate to the project directory.
2. Run the application using the command: `node index.js`
3. Follow the on-screen prompts to create your logo:
   - Enter up to three characters for the logo text
   - Choose a text color (keyword or hexadecimal)
   - Select a shape (circle, triangle, or square)
   - Choose a shape color (keyword or hexadecimal)
4. After answering all prompts, an SVG file named `logo.svg` will be generated in the same directory.

## Features

- Interactive command-line interface
- Support for three shape options: circle, triangle, and square
- Custom text (up to 3 characters) for the logo
- Color customization for both text and shape (supports color keywords and hexadecimal values)
- Input validation for text length and color format
- Generates an SVG file as the final output

## Technologies Used

- Node.js
- Inquirer.js (for command-line prompts)
- File System (fs) module (for writing SVG files)
- JavaScript ES6+ features (async/await, arrow functions)
- SVG (for logo generation)

## Credits

Developed by Marcello Romero

Special thanks to:
- The creators and maintainers of the Inquirer.js library

## License

This project is licensed under the MIT License.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions

For any questions or concerns, please open an issue in the GitHub repository or contact the developer directly at mra24@me.com

GitHub: [marcelloro24](https://github.com/marcelloro24)
