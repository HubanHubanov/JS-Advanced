function cookingByNumbers(num, ...elements) {
  let operationEnum = {
    chop: (num) => num / 2,

    dice: (num) => Math.sqrt(num),

    spice: (num) => num + 1,

    bake: (num) => num * 3,

    fillet: (num) => 0.8 * num,
  };

  for (let el of elements) {
    num = operationEnum[el](num);
    console.log(num);
  }
}

cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");

cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
