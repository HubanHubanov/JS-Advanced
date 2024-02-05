function outer() {
  let count = 5;
  let name = "Peter";

  function func(a, b) {
    count++;

    // console.log(name);

    return count + a + b;
  }

  return func;
}
const inner = outer();

// inner(3,5)

console.log(inner(3, 5));
console.log(inner(3, 5));
console.log(inner(3, 5));
console.log(inner(3, 5));
