const Square = require('./square');

describe('Square', () => {
  // Test suite for the Square class
  describe('Square class', () => {
    // Test the render method of the Square class
    test('render method should return complete SVG string with rect and text', () => {
      // Create a new Square instance with sample data
      const square = new Square('ABC', 'white', 'blue');
      
      // Define the expected SVG output based on the square.js implementation
      const expectedSvg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="70" y="20" width="160" height="160" fill="${square.shapeColor}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${square.textColor}">${square.text}</text>
    </svg>`;
      
      // Assert that the rendered SVG matches the expected SVG
      expect(square.render()).toEqual(expectedSvg);
    });

    // Test the constructor
    test('Square constructor should set text, textColor, and shapeColor', () => {
      const square = new Square('XYZ', 'black', 'yellow');
      expect(square.text).toBe('XYZ');
      expect(square.textColor).toBe('black');
      expect(square.shapeColor).toBe('yellow');
    });
  });
});
