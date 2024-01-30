function solve() {

  const text = document.getElementById("text").value;

  const convention = document.getElementById("naming-convention").value;

  let res = "";

  let textArr = text.split(" ");

  if (convention.includes("Camel")) {
    for (let i = 0; i < textArr.length; i++) {
      if (i === 0) {
        res += textArr[i].toLowerCase();
      } else {
        res +=
          textArr[i][0].toUpperCase() + textArr[i].substring(1).toLowerCase();
      }
    }
  } else if (convention.includes("Pascal")) {
    for (let i = 0; i < textArr.length; i++) {
      res += textArr[i][0].toUpperCase() + textArr[i].substring(1).toLowerCase();
    }
  } else {
    res = "Error!";
  }

   document.getElementById("result").textContent = res
}
