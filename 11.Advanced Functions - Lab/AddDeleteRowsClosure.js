function addItem() {
  const inputRef = document.getElementById("newItemText");
  const inputValue = inputRef.value;

  let newLi = document.createElement("li");

  newLi.textContent = inputValue;

  const itemsRef = document.getElementById("items");

  itemsRef.appendChild(newLi);

  let btn = document.createElement("a");
  btn.href = "#";
  btn.textContent = "[Delete]";
  newLi.appendChild(btn);

  btn.addEventListener("click", eventHandler);

  function eventHandler(event) {
   newLi.remove()
  }

  inputRef.value = "";
}
