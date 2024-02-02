function create(words) {
  const content = document.getElementById("content");

  for (let word of words) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = word;
    div.appendChild(p);
    p.style.display = "none";
    content.appendChild(div);

    div.addEventListener("click", myFunc);
  }

  function myFunc(event) {
    const currSection = event.target;
    currSection.children[0].style.display =
      currSection.children[0].style.display === "none" ? "block" : "none";
  }
}
