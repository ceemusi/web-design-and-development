// This was coded by CM x24103446

// Adding the tips to my array
const tips = [
    'Turn off the lights when you leave a room.',
    'Unplug or switch off any devices or plugged in appliances.',
    'Use reusable shopping bags.',
    'Put the correct waste material in the appropriate bin.'
];

// Using the button and displaying an output
const btn = document.getElementById('getTip');
const output = document.getElementById('showTip');

// Creating a function called show random tip, will go through each index randomly and pick a specific tip.
function randomTip() {
    const i = Math.floor(Math.random() * tips.length);
    output.textContent = tips[i];
}

// Button will run ths function when it is clicked
btn.addEventListener('click', randomTip);
