class OnlineShop {
  constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
    this.products = [];
    this.sales = [];
  }

  loadingStore(product, quantity, spaceRequired) {
    if (spaceRequired > this.warehouseSpace) {
      throw new Error("Not enough space in the warehouse.");
    }

    this.products.push({ product, quantity });
    this.warehouseSpace -= spaceRequired;
    return `The ${product} has been successfully delivered in the warehouse.`;
  }

  quantityCheck(product, minimalQuantity) {
    let found = this.products.find((e) => e.product === product);

    if (!found) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    if (minimalQuantity <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    }
    if (minimalQuantity <= found.quantity) {
      return `You have enough from product ${product}.`;
    }

    let difference = minimalQuantity - found.quantity;
    found.quantity = minimalQuantity;
    return `You added ${difference} more from the ${product} products.`;
  }

  sellProduct(product) {
    let found = this.products.find((e) => e.product === product);

    if (!found) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    found.quantity -= 1;
    this.sales.push({ product, quantity: 1 });
    return `The ${product} has been successfully sold.`;
  }

  revision() {
    if (this.sales.length === 0) {
      throw new Error("There are no sales today!");
    }
    let sum = 0;
    this.sales.forEach((e) => {
      sum += e.quantity;
      return sum;
    });

    let res = `You sold ${sum} products today!\n`;
    res +="Products in the warehouse:\n"
    this.products.forEach((e) => {
      res += `${e.product}-${e.quantity} more left\n`;
    });

    return res.trim();
  }
}

const myOnlineShop = new OnlineShop(500);
console.log(myOnlineShop.loadingStore("headphones", 10, 200));
console.log(myOnlineShop.loadingStore("laptop", 5, 200));

console.log(myOnlineShop.quantityCheck("headphones", 10));
console.log(myOnlineShop.quantityCheck("laptop", 10));

console.log(myOnlineShop.sellProduct("headphones"));
console.log(myOnlineShop.sellProduct("laptop"));
console.log(myOnlineShop.sellProduct("laptop"));
console.log(myOnlineShop.sellProduct("laptop"));
console.log(myOnlineShop.sales);

console.log(myOnlineShop.revision());
