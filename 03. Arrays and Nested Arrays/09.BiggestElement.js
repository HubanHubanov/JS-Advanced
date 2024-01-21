function biggestElement(matrix) {
  let maxNum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < matrix.length; i++) {
    let currArr = matrix[i];
    for (let j = 0; j < currArr.length; j++) {
      let currNum = currArr[j];
      if (currNum > maxNum) {
        maxNum = currNum;
      }
    }
  }
  console.log(maxNum);
}

biggestElement([
  [20, 50, 10],
  [8, 33, 145],
]);

biggestElement([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
