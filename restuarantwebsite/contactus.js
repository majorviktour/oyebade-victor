var nameInput = document.getElementById("name");
var nameError = document.getElementById("name-error");
var submitButton = document.getElementById("submit-btn");
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var message = document.getElementById("message");
nameInput.addEventListener("input", function () {
    if (nameInput.value.length < 5) {
      nameError.style.display = "block";
      email.style.display = "block"
      subject.style.display = "block"
      message.style.display = "block"
      submitButton.disabled = true;
    } else {
      nameError.style.display = "none";
      submitButton.disabled = false;
      
      
    }
  });