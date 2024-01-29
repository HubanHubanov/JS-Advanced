function calc() {
  let numOne = document.getElementById("num1").value;
  let numTwo = document.getElementById("num2").value;
  let sum = document.getElementById("sum");

  sum.value = Number(numOne) + Number(numTwo);
}
