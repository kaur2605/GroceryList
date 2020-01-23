const additemaction = document.querySelector(".add-items");
const input = document.querySelector(".input-item");
const submit = document.querySelector(".submit");

const list = document.querySelector(".Grocery-items");
const displayaction = document.querySelector(".display-items");
const clear = document.querySelector(".clear");

submit.addEventListener("click", addlist);

function addlist(event) {
  event.preventDefault();
  let value = input.value;

  if (value === "") {
    showaction(additemaction, "please add item first", false);
  } else {
    showaction(additemaction, `${value} is added to the list`, true);
  }
}

function showaction(element, text, value) {
  if (value === true) {
    console.log(value);

    element.classlist.add("success");
    element.innerText = text;
    input.value = "";
    setTimeout(function() {
      element.classlist.remove("success");
    }, 3000);
  } else {
    console.log(value);

    element.classlist.add("alert");

    element.innerText = text;
    input.value = "";
    setTimeout(function() {
      element.classlist.remove("alert");
    }, 3000);
  }
}
