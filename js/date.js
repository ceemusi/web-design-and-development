// This was coded by CM x24103446

// This creates a Date object that ulls whatever the current hour is and stores it in a const called time
const time = new Date().getHours();

// Then declared a variable called greet
let greet;

// The if statement, if the time is less than 12 hours, good morning, then it checks if its before 6pm or else if it don't match those conditions it will say good evening
if (time < 12) {
    greet = "Good morning!";
} else if (time < 18) {
    greet = "Good afternoon!";
} else {
    greet = "Good evening!";
}

// Grabs the element 'showTime' from the HTML and displays whatever is in greet based on the time
document.getElementById("showTime").innerHTML = greet;