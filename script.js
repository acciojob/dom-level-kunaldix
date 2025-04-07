//your JS code here. If required.
// script.js
const element = document.getElementById('level');
let level = 0;
let currentElement = element;

// Traverse up the DOM tree until we reach the document node
while (currentElement !== null && currentElement !== document.documentElement.parentNode) {
    level++;
    currentElement = currentElement.parentNode;
}

alert(`The level of the element is: ${level}`);