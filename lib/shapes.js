// Shape class - Base class for all shapes
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  // Method to set text color
  setTextColor(color) {
    this.textColor = color;
  }

  // Method to set shape color
  setColor(color) {
    this.shapeColor = color;
  }

  // Placeholder render method to be overridden by child classes
  render() {
    throw new Error('Child class must implement render() method');
  }
}

// Export the Shape class
module.exports = Shape;
