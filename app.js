const AddItemAction = document.querySelector(".add-items");
const input = document.querySelector(".input-item");
const submit = document.querySelector(".submit");

const list = document.querySelector(".Grocery-list");
const displayaction = document.querySelector(".display-items");
const clear = document.querySelector(".clear");

submit.addEventListener("click", addlist);

function addlist(event) {
  event.preventDefault();
  let value = input.value;

  if (value === "") {
    showaction(AddItemAction, "please add item first", false);
  } else {
    showaction(AddItemAction, `${value} is added to the list`, true);
    createitem(value);
  }
}

function showaction(element, text, value) {
  if (value === true) {
    element.classList.add("success");
    element.innerText = text;
    input.value = "";
    setTimeout(function() {
      element.classList.remove("success");
    }, 3000);
  } else {
    element.classList.add("alert");
    element.innerText = text;
    input.value = "";
    setTimeout(function() {
      element.classList.remove("alert");
    }, 3000);
  }
}

function createitem(value) {
  const parent = document.createElement("div");
  parent.classList.add("Grocery-items");
  parent.innerHTML = `<h3 class="items">${value}</h3>
        <a href="#" class="Grocery-items-link"> <i class="far fa-trash-alt"></i></a>`;
  list.appendChild(parent);
}
