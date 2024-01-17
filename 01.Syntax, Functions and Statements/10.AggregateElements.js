function aggregateElements(arr) {
  let sum = 0;
  let sumInverseValues = 0;
  let concat = "";

  for (let el of arr) {
    sum += el;
    sumInverseValues += 1 / el;
    concat += el;
  }
  console.log(sum);

  console.log(sumInverseValues);

  console.log(concat);
}

aggregateElements([1, 2, 3]);

aggregateElements([2, 4, 8, 16]);
