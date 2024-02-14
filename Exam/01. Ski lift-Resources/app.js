window.addEventListener("load", solve);

function solve() {
  const formRef = document.querySelector("form");
  formRef.addEventListener("submit", onSubmit);
  const firstNameRef = document.getElementById("first-name");
  const lastNameRef = document.getElementById("last-name");
  const peopleCountRef = document.getElementById("people-count");
  const fromDateRef = document.getElementById("from-date");
  const daysCountRef = document.getElementById("days-count");
  const infoTicketUl = document.querySelector("#info-ticket ul")
  const confirmTicketUl = document.querySelector("#confirm-ticket-section ul")
  const nextBtnRef = document.getElementById("nextt-btn")
  const body = document.getElementById("body")
  let main;


  function onSubmit(e) {
    e.preventDefault();
    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let peopleCount = peopleCountRef.value;
    let fromDate = fromDateRef.value;
    let daysCount = daysCountRef.value;

    if(!firstName || !lastName || !peopleCount || !fromDate || !daysCount) {
        return
    }
   let ticket = createTicket(firstName,lastName, peopleCount, fromDate, daysCount)

   infoTicketUl.appendChild(ticket)
   toggleBtnNext()
   formRef.reset()

    }
    function createTicket(firstName,lastName, peopleCount, fromDate, daysCount) {
         let li = document.createElement("li")
         li.classList.add("ticket")
         let innerHTMLContent = "<article>"
         innerHTMLContent += `<h3>Name: ${firstName} ${lastName}</h3>`
         innerHTMLContent += `<p>From date: ${fromDate}</p>`
         innerHTMLContent += `<p>For ${daysCount} days</p>`
         innerHTMLContent += `<p>For ${peopleCount} people</p>`
         innerHTMLContent += "</article>"

         li.innerHTML = innerHTMLContent

         let editBtn = createBtn("edit-btn", "Edit");
         let continueBtn = createBtn("continue-btn", "Continue")
         editBtn.addEventListener("click", onEdit);
         continueBtn.addEventListener("click", onContinue)
         li.appendChild(editBtn);
         li.appendChild(continueBtn)

         return li

    }
    function createBtn(classes, text) {

        let btn = document.createElement("button")
        classes && btn.classList.add(classes)
        btn.textContent = text
        return btn

    }

    function toggleBtnNext() {
        nextBtnRef.disabled = !nextBtnRef.disabled
    }
    function onEdit(e) {
        let artcicleChildren = e.currentTarget.parentElement.querySelector("article").children
        let nameData = artcicleChildren[0].textContent.split(" ")
        let dateTokens = artcicleChildren[1].textContent.split(" ")
        let daysCountToken = artcicleChildren[2].textContent.split(" ")
        let peopleCountToken = artcicleChildren[3].textContent.split(" ")

        let firstName = nameData[1]
        let lastName = nameData[2]
        let fromDate = dateTokens[2]
        let daysCount = daysCountToken[1]
        let peopleCount = peopleCountToken[1]  
        
        firstNameRef.value = firstName;
        lastNameRef.value = lastName
         fromDateRef.value = fromDate
         daysCountRef.value = daysCount
         peopleCountRef.value = peopleCount
         toggleBtnNext()
         infoTicketUl = ""

    }
    

    function onContinue(e) {
        let li = e.currentTarget.parentElement 
        let btns = li.querySelectorAll("button")
        btns[0].remove();
        btns[1].remove()
        let confirmBtn = createBtn("confirm-btn", "Confirm")
        let cancelBtn = createBtn("cancel-btn", "Cancel")

        confirmBtn.addEventListener("click", onConfirm)
        cancelBtn.addEventListener("click", onCancel)



        li.appendChild(confirmBtn)
        li.appendChild(cancelBtn)
        confirmTicketUl.appendChild(li)

    }

    function onCancel(e) {
        onDelete(e.target.parentElement)
        toggleBtnNext


    }

    function onConfirm(e) {
        onDelete(e.target.parentElement)
  main = document.getElementById("main")
  body.innerHTML = ""
  let h1 = document.createElement("h1")
  h1.textContent = "Thank you, have a nice day!"
  h1.id = "thank-you"
  let btn = createBtn("", "Back")
  btn.id ="back-btn"
  btn.addEventListener("click", onReset)
  body.appendChild(h1)
  body.appendChild(btn)

    }

    function onReset() {
        body.innerHTML = ""
        body.appendChild(main)
        toggleBtnNext()
    }


    function onDelete(elRef) {
        elRef.remove()
        
    }
      

  }



