function solve(sequenseLength, lastNums) {
  let arr = [1];

  for (let i = 0; i < sequenseLength - 1; i++) {
    let sum = 0;
    let arrForSum = arr.slice(-lastNums);
    for (let j = 0; j < arrForSum.length; j++) {
      sum += arrForSum[j];
    }
    arr.push(sum);
  }

  return arr;
}
console.log(solve(6, 3));

console.log(solve(8, 2));
