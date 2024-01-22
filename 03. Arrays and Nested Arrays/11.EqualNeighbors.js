function equalNeightbors(matrix) {
  let counter = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // console.log(matrix[row][col]);
      if (matrix[row][col] === matrix[row][col - 1]) {
        counter++;
      }
      if (row > 0) {
        if (matrix[row - 1][col] === matrix[row][col]) {
          counter++;
        }
      }
    }
  }

  console.log(counter);
}

equalNeightbors([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);

equalNeightbors([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
