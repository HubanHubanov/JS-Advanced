function stringLength(a, b, c) {
  let aLength = a.length;
  let bLength = b.length;
  let cLength = c.length;

  let totalLength = aLength + bLength + cLength;
  let avgLength = totalLength / 3;

  console.log(totalLength);
  console.log(Math.floor(avgLength));
}

stringLength("chocolate", "ice cream", "cake");

stringLength("pasta", "5", "22.3");
