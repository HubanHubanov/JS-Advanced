function laregestNumber(a, b, c) {
  let res;

  if (a > b && a > c) {
    res = a;
  } else if (b > c && b > a) {
    res = b;
  } else if (c > 1 && c > b) {
    res = c;
  }

  console.log(`The largest number is ${res}.`);
}

laregestNumber(5, -3, 16);

laregestNumber(-3, -5, -22.5);
