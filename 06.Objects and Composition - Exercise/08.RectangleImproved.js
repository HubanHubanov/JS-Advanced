function rectangle(width, height, color) {
    let res = {
      width: Number(width),
      height: Number(height),
      color: color[0].toUpperCase() + color.slice(1),
      calcArea: function () {
        return this.width * this.height;
      },
    };
  
    return res;
  }
  
  let rect = rectangle(4, 5, "red");
  console.log(rect.width);
  rect.width = 100;
  console.log(rect.width);
  
  console.log(rect.height);
  console.log(rect.color);
  console.log(rect.calcArea());
  