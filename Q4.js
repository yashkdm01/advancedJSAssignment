// Base class Shape
class Shape {
    constructor() {
      if (this.constructor === Shape) {
        throw new Error("Shape is an abstract class and cannot be instantiated directly");
      }
    }
  
    draw() {
      throw new Error("draw() method must be implemented in subclasses");
    }
  }
  
  // Circle subclass
  class Circle extends Shape {
    draw() {
      console.log("Drawing a circle...");
    }
  }
  
  // Rectangle subclass
  class Rectangle extends Shape {
    draw() {
      console.log("Drawing a rectangle...");
    }
  }
  
  // Usage example
  function drawShape(shape) {
    // Polymorphism - draw method called based on object type at runtime
    shape.draw();
  }
  
  const circle = new Circle();
  const rectangle = new Rectangle();
  
  drawShape(circle); // Output: Drawing a circle...
  drawShape(rectangle); // Output: Drawing a rectangle...
  