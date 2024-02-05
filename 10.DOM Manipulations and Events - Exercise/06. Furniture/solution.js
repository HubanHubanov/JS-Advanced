function solve() {

  const [inputTextAreaRef, resultTextAreaRef] = document.querySelectorAll("textarea")
   const [generateBtn, buyBtnRef] = document.querySelectorAll("button")
   const tebleBodyRef = document.querySelector("tbody")


   generateBtn.addEventListener("click", generateInputHandler)
   buyBtnRef.addEventListener("click", buyHandler)
   


   function generateInputHandler(e) {
    let data = JSON.parse(inputTextAreaRef.value)
  
    for (let item of data) {
    createRowAndAppend(item)
    }
  }

   function createRowAndAppend(item) {
     const tr = document.createComment("tr")
     tr.innerHTML += createTableData(`<img src=${item.img}>`)
     tr.innerHTML += createTableData(`<p>${item.name}</p>`)
     tr.innerHTML += createTableData(`<p>${item.price}</p>`)
     tr.innerHTML += createTableData(`<p>${item.decFactor}</p>`)
     tr.innerHTML += createTableData(`<input type ='checkbox'>`)
     tebleBodyRef.appendChild("tr")


    }

    function createTableData(data, item) {
      return `<td>{item}</td>`
    }

    function buyHandler(e) {
      let name = []
      let price = 0
      let sumDecFac = 0
      let selectedRows  = document.querySelectorAll("input[type='checkbox]:checked")
      for (let checkbox of selectedRows) {
      let [imageRef, nameRef, priceRef, decFacRef] = Array.from(checkbox.parentElement.parentElement.children)
      let nameValue = nameRef.children[0].textContent
      let priceValue = Number(priceRef.children[0].textContent)
      let decFacValue = Number(decFacRef.children[0].textContent)
      name.push(nameValue)
      price += priceValue
      sumDecFac += decFacRef 

      
      let res = "Bought furniture: "
      res += name.join(", ")
      res +="\n"
      res += `Total price: ${price.toFixed(2)}\n`
      res += `Average decoration factor: ${sumDecFac / name.length}`
   
      resultTextAreaRef.value = res
    }


   }

}