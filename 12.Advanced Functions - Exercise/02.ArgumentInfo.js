function argumentInfo(...arg) {
  let obj = {};

  for (let el of arg) {
    let key = typeof el;

    if (!obj.hasOwnProperty(key)) {
      obj[key] = [el];
    } else {

        obj[key].push(el);
    }

    console.log(typeof el + ": " + el);
  }

  let entries = Object.entries(obj);

  let sorted = entries.sort((a, b) => b[1].length - a[1].length);

  for (let [key, value] of entries) {
    console.log(`${key} = ${value.length}`);
  }
}


argumentInfo("cat", "dog", 42, 12, 1,  function () {
  console.log("Hello world!");
});
console.log("------------------------");
argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
