function lowestPricesInCities(input) {
  let arr = [];
  let obj = {};

  for (let el of input) {
    let [town, product, price] = el.split(" | ");
    price = Number(price);

    let found = arr.find((el) => el.product === product);

    if (!found) {
      obj = {
        town,
        product,
        price,
      };
      arr.push(obj);
    } else {
      if (found.price <= price) {
        continue;
      } else {
        found.price = price;
        found.town = town;
      }
    }
  }

  for (let el of arr) {
    console.log(`${el.product} -> ${el.price} (${el.town})`);
  }
}

lowestPricesInCities([
  "Sofia City | Audi | 100000",
  "Sofia City | BMW | 100000",
  "Mexico City | Audi | 1000",
  "Mexico City | BMW | 99999",
]);

// lowestPricesInCities([
//   "Sofia City | Audi | 100000",
//   "Sofia City | BMW | 100000",
//   "Sofia City | Mitsubishi | 10000",
//   "Sofia City | Mercedes | 10000",
//   "Sofia City | NoOffenseToCarLovers | 0",
//   "Mexico City | Audi | 1000",
//   "Mexico City | BMW | 99999",
//   "Mexico City | Mitsubishi | 10000",
//   "New York City | Mitsubishi | 1000",
//   "Washington City | Mercedes | 1000",
// ]);

// lowestPricesInCities([
//   "Sample Town | Sample Product | 1000",
//   "Sample Town | Orange | 2",
//   "Sample Town | Peach | 1",
//   "Sofia | Orange | 3",
//   "Sofia | Peach | 2",
//   "New York | Sample Product | 1",
//   "New York | Burger | 10",
// ]);
