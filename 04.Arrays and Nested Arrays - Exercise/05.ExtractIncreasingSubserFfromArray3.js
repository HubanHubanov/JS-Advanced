function extractIncresingSubsetFromArray(arr) {
    let maxNum = Number.NEGATIVE_INFINITY;
  
    return arr.reduce((acc, el) => {
      if (el >= maxNum) {
        maxNum = el;
        acc.push(maxNum);
      }
      return acc;
    }, []);
  }
  
  console.log(extractIncresingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
  console.log("-----------------");
  console.log(extractIncresingSubsetFromArray([1, 2, 3, 4]));
  console.log("-----------------");
  console.log(extractIncresingSubsetFromArray([20, 3, 2, 15, 6, 1]));
  console.log("-----------------");
  console.log(extractIncresingSubsetFromArray([1, 2, 2, 3, 4]));
  