// Shape class utilizes constructor to define what it means to be a shape
class Shape {
    constructor() {
      this.color = "";
    }
// Shape class takes in setColor function
setColor(colorVar) {
    this.color = colorVar;
  }
}

// Triangle class inherits properties defined in Shape class
// Returns polygon with color input
class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }

// Circle class inherits properties defined in Shape class
class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }