function addItem() {

  let newLi = document.createElement("li");
  
  let items = document.getElementById("items");
  
  items.appendChild(newLi);

  let textToAdd = document.getElementById("newItemText").value;

  newLi.textContent = textToAdd;

  document.getElementById("newItemText").value = ""

}
