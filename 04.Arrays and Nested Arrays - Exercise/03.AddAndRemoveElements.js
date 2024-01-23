function addAndRemoveElements(input) {
  let arr = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "add") {
      arr.push(i + 1);
    } else if (input[i] === "remove") {
      arr.pop();
    }
  }

  if (arr.length === 0) {
    console.log("Empty");
  } else {
    console.log(arr.join("\n"));
  }
}

addAndRemoveElements(["add", "add", "add", "add"]);

addAndRemoveElements(["add", "add", "remove", "add", "add"]);

addAndRemoveElements(["remove", "remove", "remove"]);
