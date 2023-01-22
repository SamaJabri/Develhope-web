class Bike {
  constructor() {
    this.wheel1 = new Wheel("Front", 126);
    this.wheel2 = new Wheel("Back", 42);
  }

  specification() {
    let message = `${this.wheel1.label} wheel diameter = ${this.wheel1.diameter}`;
    message += `, ${this.wheel2.label} wheel diameter = ${this.wheel2.diameter}`;

    return message;
  }
}

class Wheel {
  constructor(label, diameter) {
    this.label = label;
    this.diameter = diameter;
  }
}

const bike = new Bike();

console.log(bike);

console.log("Bike specification:", bike.specification());
