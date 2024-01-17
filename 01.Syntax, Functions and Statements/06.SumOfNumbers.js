function sumOfNumbers(M, N) {
  M = Number(M);
  N = Number(N);

  //   let smallerNum = Math.min(M, N);
  //   let biggerNum = Math.max(M, N);
  //this is in case it's the sum between M and N. In our case we have from M to N

  let sum = 0;

  for (let i = M; i <= N; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumOfNumbers("10", "5"));
