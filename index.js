class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `${this.x}, ${this.y}`
  }
}

class Side {
  constructor(length){
    this.length = length;
  }
}

// ES5 version
// function Shape() {
//   this.position = null;
// }
//
// Shape.prototype.addToPlane = function(x, y) {
//   this.position = new Point(x, y)
// }
//
// Shape.prototype.move = function(x, y) {
//   this.position = new Point(x, y)
// }

class Shape {
  constructor() {
    this.position = null;
  }

  addToPlane(x, y){
    this.position = new Point(x, y)
  }

  move(x, y){
    this.position = new Point(x, y)
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius
  }
  diameter() {
    return this.radius * 2
  }
  area() {
    return Math.PI * this.radius^2
  }
  circumference() {
    return 2 * Math.PI * this.radius
  }
}

class Polygon extends Shape {
  constructor(sides) {
    super();
    this.sides = sides;
  }

  perimeter() {
    var perimeter = 0
    this.sides.forEach(side => {
      perimeter += side.length
    })
    return perimeter;
  }

  numberOfSides() {
    return this.sides.length;
  }
}

class Quadrilateral extends Polygon {
  constructor(side1, side2, side3, side4) {
    super();
    this.sides = [new Side(side1), new Side(side2), new Side(side3), new Side(side4)]
  }
}

class Triangle extends Polygon {
  constructor(side1, side2, side3) {
    super();
    this.sides = [new Side(side1), new Side(side2), new Side(side3)]
  }
}

class Rectangle extends Quadrilateral {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
    this.sides = [new Side(width), new Side(width), new Side(height), new Side(height)]
  }
  area(){
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(length){
    super(length, length);
  }
  listProperties(){
    return this.hasOwnProperty();
  }
}
