function fruit(fruit, grams, price) {
  let kg = grams / 1000;

  console.log(
    `I need $${(price * kg).toFixed(2)} to buy ${kg.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

fruit("orange", 2500, 1.8);

fruit("apple", 1563, 2.35);
