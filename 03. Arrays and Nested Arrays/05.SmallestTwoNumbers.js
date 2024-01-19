function smallestTwoNUmbers(arr) {
  arr.sort((a, b) => a - b);

  let res = arr.splice(0, 2);

  console.log(res.join(" "));
}
smallestTwoNUmbers([30, 15, 50, 5]);
