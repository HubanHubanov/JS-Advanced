function dayOfWeek(input) {
  let days = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7,
  };

  res = days[input];

  if (res == undefined) {
    console.log("error");
    return;
  }

  console.log(res);
}

dayOfWeek("Friday");
