function mathOperations(a, b, op) {
    function add(a, b) {
        return a + b;
      }
      
      function substact(a, b) {
        return a - b;
      }
      
      function multiply(a, b) {
        return a * b;
      }
      
      function divide(a, b) {
        return a / b;
      }
      
      function exponentiation(a, b) {
        return a ** b;
      }
      
      function remainder(a, b) {
        return a % b;
      }
      
  switch (op) {
    case "+":
      console.log(add(a, b));
      break;

    case "-":
      console.log(substact(a, b));
      break;

    case "*":
      console.log(multiply(a, b));
      break;

    case "/":
      console.log(divide(a, b));
      break;

    case "%":
      console.log(remainder(a, b));
      break;

    case "**":
      console.log(exponentiation(a, b));
      break;
  }
}

mathOperations(5, 6, "+");

mathOperations(3, 5.5, "*");

mathOperations(2, 3, "**");

