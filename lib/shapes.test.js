// Import the Shape class
const Shape = require('./shapes');

// Main test suite for the Shape class
describe('Shape', () => {
  // Nested describe for constructor tests
  describe('constructor', () => {
    test('should set text, textColor, and shapeColor properties', () => {
      const shape = new Shape('ABC', 'white', 'blue');
      expect(shape.text).toBe('ABC');
      expect(shape.textColor).toBe('white');
      expect(shape.shapeColor).toBe('blue');
    });
  });

  // Nested describe for method tests
  describe('methods', () => {
    // Test case for the setTextColor method
    test('setTextColor should set the textColor property', () => {
      const shape = new Shape('ABC', 'white', 'blue');
      shape.setTextColor('black');
      expect(shape.textColor).toBe('black');
    });

    // Test case for the setColor method
    test('setColor should set the shapeColor property', () => {
      const shape = new Shape('ABC', 'white', 'blue');
      shape.setColor('red');
      expect(shape.shapeColor).toBe('red');
    });

    // Test case for the render method
    test('render should throw an error if not implemented', () => {
      const shape = new Shape('ABC', 'white', 'blue');
      expect(() => shape.render()).toThrow('Child class must implement render() method');
    });
  });
});

// Test suites for child classes will be in separate files
