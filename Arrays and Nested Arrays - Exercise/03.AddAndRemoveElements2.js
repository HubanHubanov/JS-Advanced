function addAndRemoveElements(input) {
    let res = [];
    let n = 1

    input.forEach(x => {
        x === "add" ? res.push(n) : res.pop()
        n++
    })

   return res.length === 0 ? "Empty" : res.join("\n")
}
  
  console.log(addAndRemoveElements(["add", "add", "add", "add"]));
  
 console.log( addAndRemoveElements(["add", "add", "remove", "add", "add"]));;
  
  console.log( addAndRemoveElements(["remove", "remove"]));;
  