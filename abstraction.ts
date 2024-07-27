// Abstract class representing a Shape
abstract class Shape {
    // Abstract method to draw the shape, must be implemented by subclasses
    abstract draw(): void;
}

// Concrete class for Circle
class Circle extends Shape {
    draw(): void {
        console.log('Drawing a circle.');
    }
}

// Concrete class for Rectangle
class Rectangle extends Shape {
    draw(): void {
        console.log('Drawing a rectangle.');
    }
}

// Function to draw any shape
function renderShape(shape: Shape) {
    shape.draw();
}

const circle = new Circle();
const rectangle = new Rectangle();

renderShape(circle);
renderShape(rectangle);