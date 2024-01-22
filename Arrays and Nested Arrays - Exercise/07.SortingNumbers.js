function sortingNumbers(arr) {
  let arrLength = arr.length;

  let res = [];

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arrLength / 2; i++) {
    let smallest = arr.shift();
    res.push(smallest);
    let biggest = arr.pop();
    res.push(biggest);
  }

  return res
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
