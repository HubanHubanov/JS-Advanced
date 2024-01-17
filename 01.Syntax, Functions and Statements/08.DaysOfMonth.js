function daysOfMonth(month, year) {
  res = new Date(year, month, 0).getDate();

  console.log(res);
}

daysOfMonth(1, 2012);

daysOfMonth(2, 2021);
