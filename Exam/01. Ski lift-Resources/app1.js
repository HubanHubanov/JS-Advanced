window.addEventListener("load", solve);

function solve() {
  let mainRef = document.getElementById("main");
  let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let peopleCount = document.getElementById("people-count");
  let fromDate = document.getElementById("from-date");
  let daysCount = document.getElementById("days-count");

  nextBtn = document.getElementById("next-btn");
  nextBtn.addEventListener("click", eventHandler);

  let ticketInfoList = document.querySelector(`ul[class="ticket-info-list"]`);
  let confirmTicket = document.querySelector(`ul[class="confirm-ticket"]`);

  function eventHandler(e) {
    // e.preventDefault();

    if (
      firstName.value === "" ||
      lastName.value === "" ||
      peopleCount.value === "" ||
      fromDate.value === "" ||
      daysCount.value === ""
    ) {
      return;
    }

    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let peopleCountValue = peopleCount.value;
    let fromDateValue = fromDate.value;
    let daysCountValue = daysCount.value;

    let liEl = document.createElement("li");
    liEl.classList.add("ticket");
    let article = document.createElement("article");
    let h3 = document.createElement("h3");
    h3.textContent = `Name : ${firstNameValue} ${lastNameValue}`;
    let p1 = document.createElement("p");
    p1.textContent = `From date: ${fromDateValue}`;
    let p2 = document.createElement("p");
    p2.textContent = `For ${daysCountValue}  days`;
    let p3 = document.createElement("p");
    p3.textContent = `For ${peopleCountValue} people`;

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    let continueBtn = document.createElement("button");
    continueBtn.classList.add("continue-btn");
    continueBtn.textContent = "Continue";

    ticketInfoList.appendChild(liEl);
    liEl.appendChild(article);
    article.appendChild(h3);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    liEl.appendChild(editBtn);
    liEl.appendChild(continueBtn);

    firstName.value = "";
    lastName.value = "";
    peopleCount.value = "";
    fromDate.value = "";
    daysCount.value = "";

    nextBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;
    editBtn.addEventListener("click", editBtnHandler);
    continueBtn.addEventListener("click", continueBtnHandler);

    firstName.value = "";
    lastName.value = "";
    peopleCount.value = "";
    fromDate.value = "";
    daysCount.value = "";

    function editBtnHandler(e) {
      // e.preventDefault();
      ticketInfoList.removeChild(liEl);
      firstName.value = firstNameValue;
      lastName.value = lastNameValue;
      peopleCount.value = peopleCountValue;
      fromDate.value = fromDateValue;
      daysCount.value = daysCountValue;
      nextBtn.disabled = false;
    }

    function continueBtnHandler(e) {
      // e.preventDefault();
      ticketInfoList.removeChild(liEl);

      confirmTicket.appendChild(liEl);
      liEl.removeChild(editBtn);
      liEl.removeChild(continueBtn);
      let confirmBtn = document.createElement("button");
      confirmBtn.classList.add("confirm-btn");
      confirmBtn.textContent = "Confirm";
      let cancelBtn = document.createElement("button");
      cancelBtn.classList.add("cancel-btn");
      cancelBtn.textContent = "Cancel";
      liEl.appendChild(confirmBtn);
      liEl.appendChild(cancelBtn);
      cancelBtn.disabled = false;
      confirmBtn.disable = false;

      cancelBtn.addEventListener("click", cancelBtnHandler);
      confirmBtn.addEventListener("click", cofirmBtnHandler);

      function cancelBtnHandler(e) {
        // e.preventDefault();

        confirmTicket.removeChild(liEl);
        nextBtn.disabled = false;
      }

      function cofirmBtnHandler(e) {
        e.preventDefault();
        confirmTicket.removeChild(liEl);

        let body = document.getElementById("body");
        let main = document.getElementById("main");
        body.removeChild(main);
        let h1 = document.createElement("h1");

        h1.textContent = "Thank you, have a nice day!";
        h1.id = "thank-you";
        let backBtn = document.createElement("button");
        backBtn.id = "back-btn";
        backBtn.textContent = "Back";
        body.appendChild(h1);
        body.appendChild(backBtn);

        backBtn.addEventListener("click", mainEvent);

        function mainEvent(e) {
          e.preventDefault();

          location.reload(true);
        }
      }
    }
  }
}
