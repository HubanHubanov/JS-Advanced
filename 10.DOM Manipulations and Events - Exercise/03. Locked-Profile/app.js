function lockedProfile() {
  let buttons = Array.from(document.querySelectorAll("button"));

  buttons.forEach((x) => x.addEventListener("click", onClickHandler));

  function onClickHandler(event) {
    let hiddenInfo = event.currentTarget.parentElement.querySelector("div");

    let radioBtn = event.currentTarget.parentElement.querySelector(
      'input[type="radio"]:checked'
    );

    if (radioBtn.value === "unlock") {
      if (event.currentTarget.textContent === "Show more") {
        event.currentTarget.textContent = "Hide it";
        hiddenInfo.style.display = "block";
      } else {
        event.currentTarget.textContent = "Show more";
        hiddenInfo.style.display = "none";
      }
    }
  }
}
