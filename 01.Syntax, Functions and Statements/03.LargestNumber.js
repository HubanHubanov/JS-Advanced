function laregestNumber(a, b, c) {
  let maxNum = Number.MIN_SAFE_INTEGER;

  let arr = [a, b, c];

  for (let num of arr) {
    if (num > maxNum) {
      maxNum = num;
    }
  }

  console.log(`The largest number is ${maxNum}.`);
}

laregestNumber(5, -3, 16);

laregestNumber(-3, -5, -22.5);
