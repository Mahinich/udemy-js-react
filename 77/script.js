'use strict';

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  calcArea() {
    return this.width * this.height;
  }
}

class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width);
    this.text = text;
    this.bgColor = bgColor;
  }
  showProps() {
    console.log(`Текст: ${this.text}, колір: ${this.bgColor}`);
  }
}

const newSquare = new ColoredRectangleWithText(100, 200, 'this is the text', 'green');

newSquare.showProps();
console.log(newSquare.text);
console.log(newSquare.calcArea());

/* const suqare1 = new Rectangle(20, 30);
const suqare2 = new Rectangle(100, 30);

console.log(suqare1.calcArea());
console.log(suqare2.calcArea()); */