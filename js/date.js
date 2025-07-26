// This was coded by CM x24103446

const time = new Date().getHours();

let greet;

if (time < 12) {
    greet = "Good morning!";
} else if (time < 18) {
    greet = "Good afternoon!";
} else {
    greet = "Good evening!";
}

document.getElementById("showTime").innerHTML = greet;