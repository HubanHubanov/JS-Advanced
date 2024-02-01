function deleteByEmail() {
  let input = document.querySelector('[name="email"]');
  let list = Array.from(document.querySelectorAll("#customers tbody tr"));
  let result = "Not found.";

  for (let el of list) {
    if (el.children[1].textContent === input.value) {
      el.remove();

      result = "Deleted.";
    }
  }

  const output = document.getElementById("result");
  output.textContent = result;
}
 