window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let age = document.getElementById("age");
  let gender = document.getElementById("genderSelect");
  let desc = document.getElementById("task");
  let submitBtn = document.getElementById("form-btn");
  submitBtn.addEventListener("click", onSubmit);

  let inProgress = document.getElementById("in-progress");

  let finished = document.getElementById("finished");
  let formRef = document.getElementsByTagName("form")[0];

  let counter = 0;
  let counterRef = document.querySelector("#message #progress-count");

  function onSubmit(e) {
    if (
      firstName.value === "" ||
      lastName.value === "" ||
      age.value === "" ||
      desc.value === ""
    ) {
      return;
    }

    counterRef.textContent = Number(counterRef.textContent) + 1;

    let li = document.createElement("li");
    li.classList.add("each-line");

    let article = document.createElement("article");

    let h4 = document.createElement("h4");
    h4.textContent = `${firstName.value} ${lastName.value}`;

    let p1 = document.createElement("p");
    p1.textContent = `${gender.value}, ${age.value}`;

    let p2 = document.createElement("p");
    p2.textContent = `Dish description: ${desc.value}`;

    let ediBtn = document.createElement("button");
    ediBtn.classList.add("edit-btn");
    ediBtn.textContent = "Edit";

    let completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.textContent = "Mark as complete";

    ediBtn.addEventListener("click", onEdit);
    completeBtn.addEventListener("click", onComplete);

    li.appendChild(article);
    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    li.appendChild(ediBtn);
    li.appendChild(completeBtn);

    inProgress.appendChild(li);
    formRef.reset();
  }

  function onEdit(e) {
    counterRef.textContent = Number(counterRef.textContent) - 1;

    let elements = e.currentTarget.parentElement;

    let arr = Array.from(elements.children[0].children);
    let firstNameValue = arr[0].textContent.split(" ")[0];
    let lastNameValue = arr[0].textContent.split(" ")[1];
    let genderValue = arr[1].textContent.split(" ")[0];
    let ageValue = arr[1].textContent.split(" ")[1];
    let descValue = arr[2].textContent.split(" ")[2];
    inProgress.removeChild(elements);

    firstName.value = firstNameValue;
    lastName.value = lastNameValue;
    gender.value = genderValue;
    age.value = ageValue;
    desc.value = descValue;
  }

  function onComplete(e) {
    counterRef.textContent = Number(counterRef.textContent) - 1;

    let elements = e.currentTarget.parentElement;
    elements.removeChild(elements.querySelector(".edit-btn"));
    elements.removeChild(elements.querySelector(".complete-btn"));

    inProgress.removeChild(elements);

    finished.appendChild(elements);

    let clearBtn = document.getElementById("clear-btn");
    clearBtn.addEventListener("click", onComplete);

    function onComplete(e) {
      let allElements = e.currentTarget.parentElement;
      let elToCLear = allElements.children[1].children[0];
      finished.removeChild(elToCLear);
    }
  }
}
