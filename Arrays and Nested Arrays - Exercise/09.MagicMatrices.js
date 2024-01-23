function magicMatrices(matrix) {
  const sum = matrix[0].reduce((acc, curr) => acc + curr, 0);

  for (let row = 0; row < matrix.length; row++) {
    let sumOne = 0;
    let sumTwo = 0;
    for (let col = 0; col < matrix.length; col++) {
      sumOne += matrix[row][col];
      sumTwo += matrix[col][row];
    }
    if (sum !== sumOne || sum !== sumTwo) {
      return "false";
    }
  }

  return true;
}

console.log(
  magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);

console.log(
  magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])
);

console.log(
  magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
  ])
);
