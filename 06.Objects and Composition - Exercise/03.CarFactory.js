function carFactory(requirements) {
  let car = { model: requirements.model };

  if (requirements.power <= 90) {
    power = 90;
    volume = 1800;
  } else if (requirements.power <= 120) {
    power = 120;
    volume = 2400;
  } else {
    power = 200;
    volume = 3500;
  }

  let wheels = 0;
  if (requirements.wheelsize % 2 === 0) {
    wheels = requirements.wheelsize - 1;
  } else {
    wheels = requirements.wheelsize;
  }

  car.engine = { power: power, volume: volume };
  car.carriage = { type: requirements.carriage, color: requirements.color };
  car.wheels = [wheels, wheels, wheels, wheels];

  return car;
}

console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);

console.log(
  carFactory({
    model: "Opel Vectra",
    power: 110,
    color: "grey",
    carriage: "coupe",
    wheelsize: 17,
  })
);
