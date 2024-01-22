function sortingNumbers(arr) {
    let arrLength = arr.length;
  
    let res = [];
  
    arr.sort((a, b) => a - b);
  
    for (let i = 0; i < arrLength / 2; i++) {
      let smallest = arr[i];
      res.push(smallest);
      let biggest = arr[arr.length - 1 - i];
      res.push(biggest);
    }
    if (res.length > arr.length) {
      res.pop();
    }
  
    return res;
  }
  
  console.log(sortingNumbers([1, 65, 3]));
  