class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width
    }
    area() {
        return this.height * this.width
    }
}


let firstrectangle = new Rectangle(5,10)
let rectangle2 = {height :1, width:2}
console.log(rectangle2);
console.log(firstrectangle);
console.log(firstrectangle.area());