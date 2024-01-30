function colorize() {
  const elements = document.getElementsByTagName("tr");

  const arr = Array.from(elements);

  for (let i = 1; i < arr.length; i += 2) {
    arr[i].style.background = "teal";
  }

  // const rows = document.querySelectorAll("tr:nth-child(even)");

  // for (let row of rows) {
  //   row.style.background = "teal";
  // }
}
