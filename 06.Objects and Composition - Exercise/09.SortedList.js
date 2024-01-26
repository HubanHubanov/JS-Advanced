function createSortedList() {
  let arr = [];

  arr.sort((a, b) => a - b);

  let obj = {
    arr: arr.sort((a, b) => a - b),
    add: function (el) {
      arr.push(el);
      arr.sort((a, b) => a - b);
      this.size = this.arr.length;
    },
    remove: function (el) {
      if (el >= 0 && el < arr.length) {
        arr.splice(el, 1);
        arr.sort((a, b) => a - b);
        this.size = this.arr.length;
      }
    },
    get: function (el) {
      if (el >= 0 && el < arr.length) {
        return this.arr[el];
      }
    },

    size: 0,
  };

  return obj;
}

let list = createSortedList();
list.add(6);
list.add(1);
list.add(7);
console.log(list.size);

console.log(list.get(1));
// list.remove(1);
// console.log(list.get(1));
