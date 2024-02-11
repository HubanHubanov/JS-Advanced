class List {
  constructor() {
    this.list = [];
  }

  add(el) {
    el = Number(el);
    this.list.push(el);
    this.list.sort((a, b) => a - b);
    this.size++
  }

  remove(index) {
    index = Number(index);
    if (index < 0 || index > this.list.length - 1) {
      throw new Error("Not a valid index");
    }
    this.list.splice(index, 1);
    this.size--
  }

  get(index) {
    index = Number(index);
    if (index < 0 || index > this.list.length - 1) {
      throw new Error("Not a valid index");
    }
    return this.list[index];
  }
  size = 0

}

let list = new List();
list.add(6);
list.add(5);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
