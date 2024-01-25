function heroicInventroy(input) {
  let result = [];
  let hero = {};

  for (let el of input) {
    let [name, level, items] = el.split(" / ");

    let found = result.find((el) => el.name === name);

    if (!found) {
      hero = {
        name: name,
        level: Number(level),
      };

      if (items) {
        let itemsArr = items.split(", ");
        hero.items = itemsArr;
      } else {
        hero.items = [];
      }

      result.push(hero);
    } else {
      found.level += Number(level);

      if (items) {
        let itemsArr = items.split(", ");
        found.items = found.items.concat(itemsArr);
      } else {
        hero.items = [];
      }
    }
  }

  return JSON.stringify(result);
}

console.log(
  heroicInventroy([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);

console.log(heroicInventroy(["Jake / 1000"]));
