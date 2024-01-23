function ticTacToe(input) {
  let board = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  let playerOne = false

  for (let i = 0; i < input.length; i++) {
    

    

    let [row, col] = input[i].split(" ");
    
    playerOne = !playerOne;

    if (playerOne) {
      if (board[row][col] === false) {
        board[row][col] = 1;
      } else if (board[row][col] === 9 || board[row][col] === 1) {
        console.log("This place is already taken. Please choose another!");
        playerOne = !playerOne;
      }
    } else {
      if (board[row][col] === false) {
        board[row][col] = 9;
      } else if (board[row][col] === 9 || board[row][col] === 1) {
        console.log("This place is already taken. Please choose another!");
        playerOne = !playerOne;
      }
    } 

    let sumFirstDiagonal = 0;
    let sumSecondaryDiagonal = 0;
    let sumsArr = [];
    let sumsColArr = [];

    for (let i = 0; i < board.length; i++) {
      sumFirstDiagonal += board[i][i];
      sumSecondaryDiagonal += board[i][board.length - 1 - i];
      let sum = 0;

      sum = board[i].reduce((acc, val) => acc + val, 0);

      sumsArr.push(sum);
      let sumCol = 0;
      for (let col = 0; col < board.length; col++) {
        sumCol += board[col][i];
      }

      sumsColArr.push(sumCol);
    }

    let [firstRowSum, secondRowSum, thirdRowSum] = sumsArr;
    let [firstColSum, secondColSum, thirdColSum] = sumsColArr;

  

    if (
      firstRowSum === 3 ||
      secondRowSum === 3 ||
      thirdRowSum === 3 ||
      firstColSum === 3 ||
      secondColSum === 3 ||
      thirdColSum === 3 ||
      sumFirstDiagonal === 3 ||
      sumSecondaryDiagonal === 3
    ) {
      console.log(`Player X wins!`);
      break;
    } else if (
      firstRowSum === 27 ||
      secondRowSum === 27 ||
      thirdRowSum === 27 ||
      firstColSum === 27 ||
      secondColSum === 27 ||
      thirdColSum === 27 ||
      sumFirstDiagonal === 27 ||
      sumSecondaryDiagonal === 27
    ) {
      console.log(`Player O wins!`);
      break;
    }

    if (!board.flat().includes(false)) {
      console.log("The game ended! Nobody wins :(");
      break;
    }
    
  }

  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board.length; k++) {
      if (board[i][k] === 1) {
        board[i][k] = "X";
      } else if (board[i][k] === 9) {
        board[i][k] = "O";
      }
    }
  }

  for (let el of board) {
    console.log(el.join("\t"));
  }
}

ticTacToe(["0 0", "1 0", "0 1", "1 1", "0 2"])

ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0",
]);
console.log("--------------");
ticTacToe([
  "0 0",
  "0 0",
  "1 1",
  "0 1",
  "1 2",
  "0 2",
  "2 2",
  "1 2",
  "2 2",
  "2 1",
]);
console.log("---------------------");
ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 2",
  "1 1",
  "2 1",
  "2 2",
  "0 0",
]);
