window.addEventListener("load", solution);

function solution() {

  let fullNameInput = document.getElementById("fname");
  let emailInput = document.getElementById("email");
  let phoneInput = document.getElementById("phone");
  let addressInput = document.getElementById("address");
  let postalCodeInput = document.getElementById("code");

  let submitBtn = document.getElementById("submitBTN");
  let editBtn = document.getElementById("editBTN");
  let continueBtn = document.getElementById("continueBTN");

//   let leftForm = document.getElementById('form');                  
// let rightForm = document.getElementById('information');
   let infoPreviewRef = document.getElementById("infoPreview");
  
  let blockDiv = document.getElementById("block");


  
  submitBtn.addEventListener("click", onSubmit);



  function onSubmit(e) {
    
     if(fullNameInput.value === "" || emailInput.value === "") {
      return
     }

  

    let li1 = document.createElement("li");
    li1.textContent = `Full Name: ${fullNameInput.value}`;
    infoPreviewRef.appendChild(li1);

    let li2 = document.createElement("li");
    li2.textContent = `Email: ${emailInput.value}`;
    infoPreviewRef.appendChild(li2);

    let li3 = document.createElement("li");
    li3.textContent = `Phone Number: ${phoneInput.value}`;
    infoPreviewRef.appendChild(li3);
      
    let li4 = document.createElement("li");
    li4.textContent = `Address: ${addressInput.value}`;
    infoPreviewRef.appendChild(li4);
    
    let li5 = document.createElement("li");
    li5.textContent = `Postal Code: ${postalCodeInput.value}`;
    infoPreviewRef.appendChild(li5);


    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    // editBtn.addEventListener("click", onEdit);
    // continueBtn.addEventListener("click", onContinue);

    let fullNameValue = fullNameInput.value;
    let emailValue = emailInput.value;
    let phoneValue = phoneInput.value;
    let addressValue = addressInput.value;
    let postalCodeValue = postalCodeInput.value;

    fullNameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    addressInput.value = "";
    postalCodeInput.value = "";

    editBtn.addEventListener("click", onEdit);

    function onEdit(e) {
    

      
      fullNameInput.value = fullNameValue;
      emailInput.value = emailValue;
      phoneInput.value = phoneValue;
      addressInput.value = addressValue;
      postalCodeInput.value = postalCodeValue;
      
      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;
      
      infoPreviewRef.textContent = ""
      
      
    }
        continueBtn.addEventListener("click", onContinue);

    function onContinue(e) {
      
      blockDiv.textContent = "";
      let msg = document.createElement("h3");
      msg.textContent = "Thank you for your reservation!";
      blockDiv.appendChild(msg);
    }
    
  }
}
