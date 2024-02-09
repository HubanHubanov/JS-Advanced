function validate() {
  let inputRef = document.getElementById("email");

  inputRef.addEventListener("change", eventHandler);

  function eventHandler(e) {
    let email = e.target.value;
    let pattern = /^[a-z]+[@]{1}[a-z]+[.]{1}[a-z]+$/gm;

    let match = pattern.exec(email);

    if (!match) {
      e.target.classList.add("error");
    } else {
      e.target.classList.remove("error");
    }
  }
}
