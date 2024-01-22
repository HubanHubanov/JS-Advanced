function listOfNames(arr) {
  arr.sort((a, b) => a.localeCompare(b));
  let counter = 0;
  arr.forEach((el) => {
    counter++;
    console.log(`${counter}.${el}`);
  });
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
