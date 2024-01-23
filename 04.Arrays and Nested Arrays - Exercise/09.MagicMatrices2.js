function magicMatrices(matrix) {
  let res = [];

  for (let row = 0; row < matrix.length; row++) {
    let sumOne = 0;
    let sumTwo = 0;
    for (let col = 0; col < matrix.length; col++) {
      sumOne += matrix[row][col];

      sumTwo += matrix[col][row];
    }
    res.push(sumOne);
    res.push(sumTwo);
  }

  console.log(res.every((x, index, res) => x === res[0]));
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
