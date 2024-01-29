function extractText() {
    const resultArea = document.getElementById("result")
   
    const items = document.getElementById("items")

    const elemnts = Array.from(items.children)

    const resArr = []
for(let el of elemnts)
   resArr.push(el.textContent)

   resultArea.textContent = resArr.join("\n")
}
