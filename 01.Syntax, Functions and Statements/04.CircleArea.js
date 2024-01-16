function circleArea(input) {
  let type = typeof input;

  if (type === "number") {
    let A = Math.PI * Math.pow(input, 2);
    console.log(A.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeof input}.`
    );
  }
}

circleArea(5);

circleArea("name");
