var elForm = document.querySelector(".form");
var elUserInput = elForm.querySelector(".user-input");
var elSelect = elForm.querySelector(".select");
var elResultBox = document.querySelector(".result");

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
  
    elResultBox.textContent = elUserInput.value / elSelect.value;
  });