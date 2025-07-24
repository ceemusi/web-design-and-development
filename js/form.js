// This was coded by CM x24103446

// Created a function called validate form, 'contactForm' is the form name from the HTML and the ID & name is 'fname' for the properties. It then uses an IF statement for if the user tries to submit nothing, an alert will pop up and tell them that they need to enter the rquired information.
function validateForm() {
  let userInput = document.forms["contactForm"]["fname"].value;
  if (userInput == "") {
    alert("Field can not be blank. Please enter the required information.");
    return false;
  }
} 