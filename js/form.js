// This was coded by CM x24103446

// Created a function called validate form, 'contactForm' is the form name from the HTM
function validateForm() {
  // Going to put the fieldnames in an array to use later
  var fieldNames = ['fname', 'lname', 'emailAddy', 'userMessage'];
  var form = document.forms['contactForm'];

  // Going through each field name, .trim() removes any white spaces between text
  for (var i = 0; i < fieldNames.length; i++) {
    var name  = fieldNames[i];
    var value = form[name].value.trim();

    // If any value is empty, show error and stop
    if (value === '') {
      alert('All fields are required. Please enter the required information');
      return false;
    } 
  }

  // Else it will return this when submitted
  alert('Thank you! We will be in touch soon.');
  return true;
}