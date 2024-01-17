function squareOfStars(num) {
  if (num === undefined) {
    num = 5;
  }

  let buff = "";
  let counter = 0;

  for (let i = 0; i < num; i++) {
    if (counter === num) {
      counter = 0;
      buff += "\n";
    }

    for (let j = 0; j < num; j++) {
      counter++;
      buff += "*";
    }
  }
  console.log(buff.split("").join(" "));
}

squareOfStars(3);
