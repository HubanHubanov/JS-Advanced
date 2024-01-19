function evenPositionElement(arr) {
  let res = "";

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      res += arr[i] + " ";
    }
  }

  console.log(res.trim());
}

evenPositionElement(["20", "30", "40", "50", "60"]);
