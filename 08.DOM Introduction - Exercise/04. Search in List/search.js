function search() {
  let searchRef = document.querySelector("#searchText");

  let towns = document.querySelectorAll("#towns li");
  let matches;

  if (document.querySelector("#result").textContent === "") {
    matches = 0;
  } else {
    matches = Number(document.querySelector("#result").textContent[0]);
  }

  for (let town of towns) {
    if (town.textContent.includes(searchRef.value)) {
      matches++;
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
    } 
  }

  document.querySelector("#result").textContent = `${matches} matches found`;
}
