class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate = (shape) => {
    
    if(shape instanceof Circle) {
      return Math.PI * Math.pow(shape.radius, 2);
    }
    else if(shape instanceof Square) {
      return Math.pow(shape.side, 2);
    }
    else {
      return shape.width * shape.height;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));