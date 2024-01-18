function sameNumbers(num) {
  let numToString = num.toString();
  let sum = 0;

  let isSame = true;

  for (let i = 0; i < numToString.length; i++) {
    let currNum = Number(numToString[i]);
    let prevNum = Number(numToString[i - 1]);

    if (i >= 1) {
      if (currNum !== prevNum) {
        isSame = false;
      }
    }

    sum += currNum;
  }

  console.log(isSame);
  console.log(sum);
}

sameNumbers(221);

// sameNumbers(1234);

