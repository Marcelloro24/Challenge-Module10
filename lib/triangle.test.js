const Triangle = require('./triangle');

describe('Triangle', () => {
  // Test suite for the Triangle class
  describe('Triangle class', () => {
    // Test the render method of the Triangle class
    test('render method should return complete SVG string with polygon and text', () => {
      // Create a new Triangle instance with sample data
      const triangle = new Triangle('ABC', 'white', 'blue');
      
      // Define the expected SVG output based on the triangle.js implementation
      const expectedSvg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill="${triangle.shapeColor}" />
      <text x="150" y="150" font-size="60" text-anchor="middle" fill="${triangle.textColor}">${triangle.text}</text>
    </svg>`;
      
      // Assert that the rendered SVG matches the expected SVG
      expect(triangle.render()).toEqual(expectedSvg);
    });

    // Test the constructor
    test('Triangle constructor should set text, textColor, and shapeColor', () => {
      const triangle = new Triangle('XYZ', 'black', 'yellow');
      expect(triangle.text).toBe('XYZ');
      expect(triangle.textColor).toBe('black');
      expect(triangle.shapeColor).toBe('yellow');
    });
  });

  // Test for the setColor method
  test('setColor method should update shapeColor', () => {
    const triangle = new Triangle('DEF', 'white', 'purple');
    triangle.setColor('orange');
    const renderedSvg = triangle.render();
    expect(renderedSvg).toContain('fill="orange"');
  });
});
