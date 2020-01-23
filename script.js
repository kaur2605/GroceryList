const additemaction = document.querySelector(".add-items");
const submit = document.querySelector(".submit");

submit.addEventListener("click", function() {
  additemaction.classList.add("success");

  setTimeout(function() {
    additemaction.classlist.remove("success");
  }, 4000);
});
