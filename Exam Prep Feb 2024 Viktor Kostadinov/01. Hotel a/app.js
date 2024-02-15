window.addEventListener("load", solve);

function solve() {
  let firstNameRef = document.getElementById("first-name");
  let lastNameRef = document.getElementById("last-name");
  let dateInRef = document.getElementById("date-in");
  let dateOutRef = document.getElementById("date-out");
  let peopleCountRef = document.getElementById("people-count");

  let nextBtnRef = document.getElementById("next-btn");
  let verifyRef = document.getElementById("verification");

//   let infoRef = document.querySelector("[class='info-list']");
  let infoRef = document.querySelector(".info-list");
  
//   let confirmRef = document.querySelector("[class='confirm-list']");
  let confirmRef = document.querySelector(".confirm-list");

  nextBtnRef.addEventListener("click", onNext);

  function onNext(e) {
    e.preventDefault()
    if (
      firstNameRef.value == "" ||
      lastNameRef.value == "" ||
      dateInRef.value == "" ||
      dateOutRef.valuef == "" ||
      peopleCountRef.value == ""
    ) {
      return;
    }
    if (
      new Date(dateInRef.value) >= new Date(dateOutRef.value)
    ) {
      return;
    }

    let li = document.createElement("li");
    li.className = "reservation-content";
                   
    let article = document.createElement("article");

    let h3 = document.createElement("h3");
    h3.textContent = `Name: ${firstNameRef.value} ${lastNameRef.value}`;

    let p1 = document.createElement("p");
    p1.textContent = `From date: ${dateInRef.value}`;

    let p2 = document.createElement("p");
    p2.textContent = `To date: ${dateOutRef.value}`;

    let p3 = document.createElement("p");
    p3.textContent = `For ${peopleCountRef.value} people`;

    let editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";

    let continueBtn = document.createElement("button");
    continueBtn.className = "continue-btn";
    continueBtn.textContent = "Continue";

    article.appendChild(h3);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(continueBtn);
    
    infoRef.appendChild(li);


    let editFirstName = firstNameRef.value;
    let editLastName = lastNameRef.value;
    let editDateIn = dateInRef.value;
    let editDateOut = dateOutRef.value;
    let editPeopleCount = peopleCountRef.value;

    firstNameRef.value = "";
    lastNameRef.value = "";
    dateInRef.value = "";
    dateOutRef.value = "";
    peopleCountRef.value = "";

    nextBtnRef.disabled = true;


    editBtn.addEventListener("click", onEdit);

    function onEdit() {
        
        firstNameRef.value = editFirstName;
        lastNameRef.value = editLastName;
        dateInRef.value = editDateIn;
        dateOutRef.value = editDateOut;
        peopleCountRef.value = editPeopleCount;
        
        infoRef.textContent = "";
        // li.remove()

        nextBtnRef.disabled = false;
    }

    continueBtn.addEventListener("click", onContinue);

    function onContinue() {
      let liConfirm = document.createElement("li")
       liConfirm.className = "reservation-content"

       let articleConfirm = document.createElement("article")
       articleConfirm =article

       let confirmBtn = document.createElement("button");
      confirmBtn.className = "confirm-btn";
      confirmBtn.textContent = "Confirm";

      let cancelBtn = document.createElement("button");
      cancelBtn.className = "cancel-btn";
      cancelBtn.textContent = "Cancel";

      liConfirm.appendChild(articleConfirm)
      liConfirm.appendChild(confirmBtn)
      liConfirm.appendChild(cancelBtn)

      confirmRef.appendChild(liConfirm)

     

      

      infoRef.textContent = "";

      confirmBtn.addEventListener("click", onConfirm);
      cancelBtn.addEventListener("click", onCancel);

      function onConfirm() {
        confirmRef.textContent = "";

        nextBtnRef.disabled = false;

        // let confirmClass = document.createElement("class");
        // confirmClass.className = "reservation-confirmed";
        // confirmClass.textContent = "Confirmed.";
        //  verifyRef.appendChild(confirmClass);
        verifyRef.setAttribute("class", "reservation-confirmed")
        verifyRef.textContent = "Confirmed."


      }

      function onCancel() {
        confirmRef.textContent = "";

        nextBtnRef.disabled = false;

        // let cancelClass = document.createElement("class");
        // cancelClass.className = "reservation-cancelled";
        // cancelClass.textContent = "Cancelled.";
        // verifyRef.appendChild(cancelClass);
        
        verifyRef.setAttribute("class", "reservation-cancelled")
        verifyRef.textContent = "Cancelled."

      }
    }
  }
}
