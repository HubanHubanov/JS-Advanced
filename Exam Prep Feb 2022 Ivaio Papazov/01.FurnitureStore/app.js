window.addEventListener("load", solve);

function solve() {
  let modelRef = document.getElementById("model");
  let yearRef = document.getElementById("year");
  let descRef = document.getElementById("description");
  let priceRef = document.getElementById("price");


  let totalPrice = document.querySelector(".total-price");
  let price = 0;
  let less = true

  let furnitureList = document.getElementById("furniture-list");

  let addBtnRef = document.getElementById("add");

  addBtnRef.addEventListener("click", onAdd);

  function onAdd(e) {
    e.preventDefault();
    if (
      modelRef.value == "" ||
      yearRef.value == "" ||
      descRef.value == "" ||
      priceRef.value == "" ||
      yearRef.value < 0 ||
      priceRef.value < 0
    ) {
      return;
    }
    let trInfo = document.createElement("tr");
    trInfo.className = "info";

    let tdName = document.createElement("td");
    tdName.textContent = `${modelRef.value}`;

    let tdPrice = document.createElement("td");
    tdPrice.textContent = `${Number(priceRef.value).toFixed(2)}`;

    trInfo.appendChild(tdName);
    trInfo.appendChild(tdPrice);

    let tdBtns = document.createElement("td");

    let moreBtn = document.createElement("button");
    moreBtn.className = "moreBtn";
    moreBtn.textContent = "More Info";

    let buyBtn = document.createElement("button");
    buyBtn.className = "buyBtn";
    buyBtn.textContent = "Buy it";

    tdBtns.appendChild(moreBtn);
    tdBtns.appendChild(buyBtn);

    trInfo.appendChild(tdBtns);

    let trHide = document.createElement("tr");
    trHide.className = "hide";

    let tdYear = document.createElement("td");
    tdYear.textContent = `Year: ${yearRef.value}`;

    let tdDesc = document.createElement("td");
    // tdDesc.setAttribute("colspan", "3");
    tdDesc.colSpan = "3"
    tdDesc.textContent = `Description: ${descRef.value}`;

    trHide.appendChild(tdYear);
    trHide.appendChild(tdDesc);

    furnitureList.appendChild(trInfo);
    furnitureList.appendChild(trHide);

    modelRef.value = "";
    yearRef.value = "";
    descRef.value = "";
    priceRef.value = "";

    moreBtn.addEventListener("click", onMore);

     

    function onMore(e) {
      if (less) {
        moreBtn.textContent = "Less Info";
        trHide.style.display = "contents";
      } else {
        moreBtn.textContent = "More Ifo";
        trHide.style.display = "none";
      }
      less = !less;
      // if (moreBtn.textContent == 'More Info') {
      //   moreBtn.textContent = 'Less Info';
      //   trHide.style.display = "contents";
      //   // document.querySelector("#furniture-list > tr.hide").style.display = 'contents';
      //   } else if (moreBtn.textContent == 'Less Info') {
      //   moreBtn.textContent = 'More Info';
      //           trHide.style.display = "none";

      //   // document.querySelector("#furniture-list > tr.hide").style.display = 'none';
      //   }    




    }
    buyBtn.addEventListener("click", onBuy);


    function onBuy(e) {
      price += Number(
        e.target.parentElement.parentElement.children[1].textContent
      );
      totalPrice.textContent = "";

      totalPrice.textContent = `${price.toFixed(2)}`;

      e.target.parentElement.parentElement.textContent = "";
    }
  } //onAdd end
}


