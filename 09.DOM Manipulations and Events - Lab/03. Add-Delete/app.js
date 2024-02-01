function addItem() {
  const input = document.getElementById("newItemText");
  const inputText = input.value;

  if (inputText.length == 0) {
    return;
  }

  const newLi = document.createElement("li");
  newLi.textContent = inputText;

  const deleteButton = document.createElement("a");
  deleteButton.textContent = "[Delete]";
  deleteButton.href = "#";
  newLi.appendChild(deleteButton);
  deleteButton.addEventListener("click", deleteFunction);

  const items = document.getElementById("items");
  items.appendChild(newLi);

  input.value = "";

  function deleteFunction(event) {
    const btn = event.target;
    const liElToDel = btn.parentElement;
    liElToDel.remove();
  }
}
