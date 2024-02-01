function addItem() {

  let newLi = document.createElement("li");
  
  let textToAdd = document.getElementById("newItemText").value;
  
  if(textToAdd.length == 0) {
    return
  }

      let items = document.getElementById("items");
      
      items.appendChild(newLi);
    
    
      newLi.textContent = textToAdd;
    
      document.getElementById("newItemText").value = ""





  

}
