class Point {
    constructor(a, b ) {
           this.x = a;
           this.y = b; 
     }

  

   static distance(a,b) {
        let x = b.x - a.x;
        let y = b.y - a.y;
        let dist = Math.sqrt(x**2 + y **2)
        return dist
    }

}

let myPoint = new Point(0, 0)
let myPoint2 = new Point(3,4)

console.log(Point.distance(myPoint,  myPoint2)); 