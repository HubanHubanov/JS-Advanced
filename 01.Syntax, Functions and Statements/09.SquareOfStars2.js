function squareOfStars(num) {
  if (num === undefined) {
    num = 5;
  }

  for (let i = 0; i < num; i++) {
    res = "*".repeat(num);

    console.log(res.split("").join(" "));
  }
}

squareOfStars(4);
