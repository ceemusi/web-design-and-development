// This was coded by CM x24103446
function validateForm() {
  let userInput = document.forms["contactForm"]["fname"].value;
  if (userInput == "") {
    alert("Field can not be blank. Please enter the required information.");
    return false;
  }
} 