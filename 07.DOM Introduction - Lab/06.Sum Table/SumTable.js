function sumTable() {
  let table = document.querySelectorAll("table tr");
  let total = 0;

  for (let i = 1; i < table.length; i++) {
    let cols = table[i].children;
    let cost = cols[cols.length - 1].textContent;
    total += Number(cost);
  }
  document.getElementById("sum").textContent = total;
}

// function sumTable() {
//   let table = document.getElementsByTagName("tr");

//   let tableArr = Array.from(table);
//   let sum = 0;

//   for (let i = 1; i < tableArr.length - 1; i++) {
//     let cols = tableArr[i].children;
//     let cost = cols[cols.length - 1].textContent;
//     sum += Number(cost);
//   }

//   document.getElementById("sum").textContent = sum;
// }
