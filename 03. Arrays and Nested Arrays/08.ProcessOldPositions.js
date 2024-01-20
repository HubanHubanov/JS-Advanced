function processOldPositions(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      res.push(arr[i]);
    }
  }

  return res.map((x) => x * 2).reverse();
}

console.log(processOldPositions([10, 15, 20, 25]));

console.log(processOldPositions([3, 0, 10, 4, 7, 3]));
