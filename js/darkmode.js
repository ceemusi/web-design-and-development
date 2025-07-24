// This was coded by CM x24103446

// Creating the variable and using the id
var themeBtn = document.getElementById('toggleTheme');

// The toggle for the button
themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Update the buttton text based on each mode
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = '💡Switch on the light';
    } else {
        themeBtn.textContent = '💡Switch off the light';
    }
});