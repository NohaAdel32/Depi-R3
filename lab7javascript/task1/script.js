class Shape{
    constructor(width,length){
        this.width=width;
        this.length=length;
    }
     calculateArea() {
    throw new Error("calculateArea must be implemented by subclasses");
  }
}

class Rectangle extends Shape{
     constructor(width,length){
        super(width,length)
     }
     calculateArea(){
        return this.width * this.length
     }
    static compareArea(rect1,rect2){
    const area1 = rect1.calculateArea();
    const area2 = rect2.calculateArea();
    if (area1 > area2) return "Rectangle 1 is larger";
    if (area1 < area2) return "Rectangle 2 is larger";
    return "Both rectangles have the same area";
  }
    }
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
    static compareArea(circ1,circ2){
    const area1 = circ1.calculateArea();
    const area2 = circ2.calculateArea();
    if (area1 > area2) return "Circle 1 is larger";
    if (area1 < area2) return "Circle 2 is larger";
    return "Both Circles have the same area";
  }
}

const rect1= new Rectangle(5,6)
const rect2= new Rectangle(15,6)
const circ1= new Circle(5)
const circ2= new Circle(10)

console.log(Circle.compareArea(circ1,circ2))
console.log(Rectangle.compareArea(rect1,rect2))