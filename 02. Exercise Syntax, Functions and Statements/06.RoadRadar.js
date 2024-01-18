function roadRadar(speed, area) {
  let limit;
  let status;
  let difference;

  switch (area) {
    case "motorway":
      limit = 130;
      status = "";
      difference = speed - limit;
      if (difference <= 20) {
        status = "speeding";
      } else if (difference <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }

      if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
      } else {
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
        );
      }
      break;

    case "interstate":
      limit = 90;
      status = "";
      difference = speed - limit;
      if (difference <= 20) {
        status = "speeding";
      } else if (difference <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }

      if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
      } else {
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
        );
      }
      break;

    case "city":
      limit = 50;
      status = "";
      difference = speed - limit;
      if (difference <= 20) {
        status = "speeding";
      } else if (difference <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }

      if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
      } else {
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
        );
      }
      break;

    case "residential":
      limit = 20;
      status = "";
      difference = speed - limit;
      if (difference <= 20) {
        status = "speeding";
      } else if (difference <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }

      if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
      } else {
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
        );
      }
      break;
  }
}

roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
