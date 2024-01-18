function validityChecker(x1, y1, x2, y2) {
  let firstDistance = Math.sqrt((0 - x1) * (0 - x1) + (0 - y1) * (0 - y1));

  let secondDistance = Math.sqrt((x2 - 0) * (x2 - 0) + (y2 - 0) * (y2 - 0));

  let thirdDistance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

  // console.log(Number.isInteger(firstDistance) ? "valid" : "invalid");

  console.log(
    `{${x1}, ${y1}} to {0, 0} is ${
      Number.isInteger(firstDistance) ? "valid" : "invalid"
    }`
  );
  console.log(
    `{${x2}, ${y2}} to {0, 0} is ${
      Number.isInteger(secondDistance) ? "valid" : "invalid"
    }`
  );
  console.log(
    `{${x1}, ${y1}} to {${x2}, ${y2}} is ${
      Number.isInteger(thirdDistance) ? "valid" : "invalid"
    }`
  );
}

validityChecker(3, 0, 0, 4);
console.log("-------------");
validityChecker(2, 1, 1, 1);
