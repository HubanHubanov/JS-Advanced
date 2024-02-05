function attachEventsListeners() {
  const buttons = document.querySelectorAll('[type="button"]');

  for (let button of buttons) {
    button.addEventListener("click", myFunc);
  }

  function myFunc(event) {
    let currButton = event.currentTarget;
    let currInput = currButton.parentElement.children[1];
    let currInputValue = currInput.value;
    let currButtonName = currButton.parentElement.children[2].id;
    solve(currButtonName, currInputValue);


    if(currButtonName === "daysBtn") {
      currInputValue = days
    } else  if(currButtonName === "hourssBtn") {
      currInputValue = hours
    }  if(currButtonName === "minutesBtn") {
      currInputValue = minutes
    }  if(currButtonName === "secondsBtn") {
      currInputValue = seconds
    }

    
  }



}

function solve(input, num) {
  num = Number(num);
 

  if (input === "daysBtn") {
    days = num;
    hours = 24 * days;
    minutes = 60 * hours;
    seconds = 60 * minutes;
  } else if (input === "hoursBtn") {
    hours = num;
    days = hours / 24;
    minutes = 60 * hours;
    seconds = 60 * minutes;
  } else if (input === "minutesBtn") {
    minutes = num;
    hours = minutes / 60;
    days = hours / 24;
    seconds = 60 * minutes;
  } else if (input === "secondsBtn") {
    seconds = num;
    minutes = seconds / 60;
    hours = minutes / 60;
    days = hours / 24;
  }
    
}

// let buttons = document.querySelectorAll('[type="button"]');

//   for (let button of buttons) {
//     document.addEventListener("click", myFunc);
//   }

//   function myFunc(event) {
//     let currButton = event.currentTarget;
//   }
