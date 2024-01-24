function constructorCrew(obj) {

  if (!obj.dizziness) {
    return obj;
  }

  let water = 0.1 * obj.weight * obj.experience;

  obj.levelOfHydrated += water;

  obj.dizziness = false;

  return obj;
  
}

console.log(
  constructorCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true,
  })
);

console.log(
  constructorCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true,
  })
);

console.log(
  constructorCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false,
  })
);
