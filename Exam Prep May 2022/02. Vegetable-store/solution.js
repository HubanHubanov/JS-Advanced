class VegetableStore {
  constructor(owner, location, availableProduct) {
    this.owner = owner;
    this.location = location;
    this.availableProduct = [];
  }

  loadingVegetables(vegArr) {
    for (let el of vegArr) {
      let [name, count, price] = el.split(" ");
      count = Number(count);
      price = Number(price);

      let found = this.availableProduct.find((x) => x.name === name);
      if (!found) {
        this.availableProduct.push({ name, count, price });
      } else {
        found.count += count;
        if (found.price < price) {
          found.price = price;
        }
      }
    }
    let resArr = [];

    for (let el of this.availableProduct) {
      resArr.push(el.name);
    }

    return `Successfully added ` + resArr.join(", ");
  }

  buyingVegetables(buyingArr) {
    let totalPrice = 0;
    for (let el of buyingArr) {
      let [name, count] = el.split(" ");
      count - Number(count);
      let found = this.availableProduct.find((x) => x.name === name);
      if (!found) {
        throw new Error(
          `${name} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      } else {
        if (found.count < count) {
          throw new Error(
            `The quantity ${count} for the vegetable ${name} is not available in the store, your current bill is $${totalPrice.toFixed(
              2
            )}.`
          );
        }
        found.count -= count;
        let namePrice = count * found.price;
        totalPrice += namePrice;
      }
    }
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }

  rottingVegetable(name, count) {
    count = Number(count);

    let found = this.availableProduct.find((x) => x.name === name);
    if (!found) {
      throw new Error(`${name} is not available in the store.`);
    }

    if (found.count < count) {
      found.count = 0;
      return `The entire quantity of the ${name} has been removed.`;
    } else {
      found.count -= count;
      return `Some quantity of the ${name} has been removed.`;
    }
  }

  revision() {
    let sorted = this.availableProduct.sort((a, b) => a.price - b.price);
    let res = "Available vegetables:\n";
    for (let el of sorted) {
      res += `${el.name}-${el.count}-$${el.price}\n`;
    }
    res += `The owner of the store is ${this.owner}, and the location is ${this.location}.`;
    return res;
  }
}



let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
  vegStore.loadingVegetables([
    "Okra 2.5 3.5",
    "Beans 10 2.8",
    "Celery 5.5 2.2",
    "Celery 0.5 2.5",
  ])
);
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
