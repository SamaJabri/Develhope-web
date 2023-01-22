const clc = require("cli-color");

class Text {
  constructor(text) {
    this.text = text;
  }

  toString() {
    return this.text;
  }
}

class BlueText {
  constructor(text) {
    this.text = text;
  }

  toString() {
    return clc.blue(this.text.toString());
  }
}

console.log(new Text("AHHHHHHHHH").toString());
console.log(new BlueText(new Text("AHHHHHHHHH IN BLUE")).toString());
