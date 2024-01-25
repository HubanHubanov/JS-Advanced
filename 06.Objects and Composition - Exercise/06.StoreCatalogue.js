function storeCatalogue(arr) {
  let catalogue = {};

  arr.sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < arr.length; i++) {
    let group = arr[i][0];

    let [item, price] = arr[i].split(" : ");
    price = Number(price);

    catalogue[item] = price;
  }

  let keys = Object.keys(catalogue);

  for (let i = 0; i < keys.length; i++) {
    if (i === 0) {
      console.log(keys[i][0]);
    } else {
      if (keys[i][0] !== keys[i - 1][0]) {
        console.log(keys[i][0]);
      }
    }

    console.log(`  ${keys[i]}: ${catalogue[keys[i]]}`);
  }
}

storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
