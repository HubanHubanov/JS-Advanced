function solve(input, num) {
    let hours;
    let days;
    let minutes;
    let seconds;
  
    if (input === "days") {
      days = num;
      hours = 24 * days;
      minutes = 60 * hours;
      seconds = 60 * minutes;
    } else if (input === "hours") {
      hours = num;
      days = hours / 24;
      minutes = 60 * hours;
      seconds = 60 * minutes;
    } else if (input === "minutes") {
      minutes = num;
      hours = minutes / 60;
      days = hours / 24;
      seconds = 60 * minutes;
    } else if (input === "seconds") {
      seconds = num;
      minutes = seconds / 60;
      hours = minutes / 60;
      days = hours / 24;
    }
  }
  
  solve("hours", 108);
  
 
  