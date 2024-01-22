function printEveryNthElement(arr, N) {
  let res = [];

  for (let i = 0; i < arr.length; i += N) {
    res.push(arr[i]);
  }
return res
}

printEveryNthElement(["5", "20", "31", "4", "20"], 2);

printEveryNthElement(["dsa", "asd", "test", "tset"], 2);

printEveryNthElement(["1", "2", "3", "4", "5"], 6);
