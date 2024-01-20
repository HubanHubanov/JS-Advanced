function solve(sequenseLength, lastNums) {
    let arr = [1];
  
    for (let i = 0; i < sequenseLength - 1; i++) {
      let sum = 0;
      for (let j = i; j > i - lastNums; j--) {
        if (arr[j] !== undefined) {
          sum += arr[j];
        }
      }
  
      arr.push(sum);
    }
  
    return arr
  }
  
  solve(6, 3);
  
  solve(8, 2);
  
  
  