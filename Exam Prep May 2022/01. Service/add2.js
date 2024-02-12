window.addEventListener("load", solve);

function solve() {
  let typeRef = document.getElementById("type-product");
  let descRef = document.getElementById("description");
  let nameRef = document.getElementById("client-name");
  let phoneRef = document.getElementById("client-phone");

  let receivedOrdersRef = document.getElementById("received-orders");
  let completedOrdersRef = document.getElementById("completed-orders");

  let btnRef = document.querySelector("button");

  btnRef.addEventListener("click", eventHandler);

  function eventHandler(e) {
    e.preventDefault();

    if (descRef.value === "" || nameRef.value === "" || phoneRef.value === "") {
      return;
    }

    let container = document.createElement("div");
    container.classList.add("container");

    let h2 = document.createElement("h2");
    h2.textContent = `Product type for repair: ${typeRef.value}`;
    container.appendChild(h2);

    let h3 = document.createElement("h3");
    h3.textContent = `Client information: ${nameRef.value}, ${phoneRef.value}`;
    container.appendChild(h3);

    let h4 = document.createElement("h4");
    h4.textContent = `Description of the problem: ${descRef.value}`;
    container.appendChild(h4);

    let startBtn = document.createElement("button");
    startBtn.classList.add("start-btn");
    startBtn.textContent = "Start repair";
    startBtn.addEventListener("click", startRepair);
    container.appendChild(startBtn);

    let finishBtn = document.createElement("button");
    finishBtn.classList.add("finish-btn");
    finishBtn.disabled = true;
    finishBtn.textContent = "Finish repair";
    finishBtn.addEventListener("click", finishRepair);
    container.appendChild(finishBtn);

    receivedOrdersRef.appendChild(container);

    function startRepair(e) {
      // startBtn.disabled = true;
      e.currentTarget.disabled = true
      // finishBtn.disabled = false;
      e.currentTarget.parentNode.querySelector(".finish-btn").disabled = false

    }

    function finishRepair(e) {
      // finishBtn.disabled = true;
      // receivedOrdersRef.removeChild(container);
      // container.removeChild(startBtn);
      // container.removeChild(finishBtn);
      // completedOrdersRef.appendChild(container);

      let containerDiv = e.currentTarget.parentNode
      e.currentTarget.remove()
      containerDiv.querySelector(`.start-btn`).remove()
      containerDiv.remove()
      completedOrdersRef.appendChild(containerDiv)
    

    }

    let clearBtnRef = document.querySelector("button[class='clear-btn']");
    clearBtnRef.addEventListener("click", cleanBtn);

    function cleanBtn(e) {
      // completedOrdersRef.removeChild(container);
      let allContainers = Array.from(e.currentTarget.parentNode.querySelectorAll(".container"))
      for(let container of allContainers) {
        container.remove()
      }
   
    }

    typeRef.value = "";
    descRef.value = "";
    nameRef.value = "";
    phoneRef.value = "";
  }
}
