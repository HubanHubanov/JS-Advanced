function processOddPositions(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      res.push(arr[i]);
    }
  }

  return res.map((x) => x * 2).reverse();
}

console.log(processOddPositions([10, 15, 20, 25]));

console.log(processOddPositions([3, 0, 10, 4, 7, 3]));
