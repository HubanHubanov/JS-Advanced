function extractIncresingSubsetFromArray(arr) {
  let res = [];
  let maxNum = Number.NEGATIVE_INFINITY;

  for (let el of arr) {
    if (el >= maxNum) {
      maxNum = el;
      res.push(el);
    }
  }

 return res;
}

console.log(extractIncresingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log("-----------------");
console.log(extractIncresingSubsetFromArray([1, 2, 3, 4]));
console.log("-----------------");
console.log(extractIncresingSubsetFromArray([20, 3, 2, 15, 6, 1]));
console.log("-----------------");
console.log(extractIncresingSubsetFromArray([1,2,2, 3,4]))