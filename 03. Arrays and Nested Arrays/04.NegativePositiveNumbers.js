function negativePositiveNumbers(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      res.unshift(arr[i]);
    } else {
      res.push(arr[i]);
    }
  }

  console.log(res);
}

negativePositiveNumbers([3, -2, 0, -1]);
