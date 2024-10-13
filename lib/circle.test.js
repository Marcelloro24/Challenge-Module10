const Circle = require('./circle');

describe('Circle', () => {
  // Nested describe for Circle-specific tests
  describe('Circle class', () => {
    // Test the render method of the Circle class
    test('render method should return complete SVG string with circle and text', () => {
      // Create a new Circle instance with sample data
      const circle = new Circle('ABC', 'white', 'blue');
      
      // Define the expected SVG output
      const expectedSvg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="${circle.shapeColor}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${circle.textColor}">${circle.text}</text>
    </svg>`;
      
      // Assert that the rendered SVG matches the expected SVG
      expect(circle.render()).toEqual(expectedSvg);
    });

    // Test the constructor and inheritance
    test('Circle should have Shape properties and methods', () => {
      const circle = new Circle('MIA', 'black', 'yellow');
      expect(circle.setColor).toBeDefined();
      expect(typeof circle.setColor).toBe('function');
      // Add more checks for Shape properties/methods as needed
    });
  });

  // Nested describe for inherited method tests
  describe('Inherited methods', () => {
    // Test the setColor method inherited from Shape
    test('setColor method should update shapeColor', () => {
      const circle = new Circle('MIA', 'black', 'yellow');
      circle.setColor('green');
      const renderedSvg = circle.render();
      expect(renderedSvg).toContain('fill="green"');
    });
  });
});
