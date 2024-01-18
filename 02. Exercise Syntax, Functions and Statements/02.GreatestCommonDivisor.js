function greatestCommonDivisor(numOne, numTwo) {
  let smallerNum = Math.min(numOne, numTwo);
  let biggerNum = Math.max(numOne, numTwo);
  let res = 0;

  for (let i = smallerNum; i >= 1; i--) {
    if (biggerNum % i === 0 && smallerNum % i === 0) {
      res = i;
      break;
    }
  }

  console.log(res);
}

greatestCommonDivisor(15, 5);

greatestCommonDivisor(2154, 458);
