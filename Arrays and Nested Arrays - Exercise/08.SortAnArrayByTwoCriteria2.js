function sortAnArrayByTwoCriteria(arr) {
    // arr.sort((a, b) => a.localeCompare(b));
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
  
    console.log(arr.join("\n"));
  }
  
  sortAnArrayByTwoCriteria(["alpha", "beta", "gamma"]);
  
  sortAnArrayByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
  
  sortAnArrayByTwoCriteria(["test", "Deny", "omen", "Default"]);
  