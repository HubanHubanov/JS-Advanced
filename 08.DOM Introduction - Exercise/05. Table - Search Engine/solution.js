function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  
  
  function onClick() {

    const searchInputRef = document.getElementById("searchField");
    
    const tableRows = Array.from(document.querySelectorAll("tbody tr"));
    let searchText = searchInputRef.value;
    
    for (let tablerow of tableRows) {
      let tableData = Array.from(tablerow.querySelectorAll("td"));
      for (let data of tableData) {
        
        if (data.textContent.includes(searchText)) {
          tablerow.classList.add("select");
          break;
        } else {
          tablerow.classList.remove("select");
        }
      }
    }
    searchInputRef.value = "";
  }
}
