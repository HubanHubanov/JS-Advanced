function diagonalSums(matrix) {
  let firstSum = 0;

  let secondSum = 0;

  let index = 0;

  for (let row = 0; row < matrix.length; row++) {
    let currArr = matrix[row];

    firstSum += currArr[row];

    secondSum += currArr[currArr.length - 1 - index];
    index++;
  }

  console.log(firstSum, secondSum);

}

diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);

diagonalSums([
  [20, 40],
  [10, 60],
]);
