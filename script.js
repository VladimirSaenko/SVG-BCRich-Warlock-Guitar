
"use strict";

let guitarBody = document.getElementById("guitarBody");
let griff = document.getElementById("griff");
let input1 = document.getElementById("color1");
let input2 = document.getElementById("color2");
// let body = document.body;

// body.style.background = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;

input1.addEventListener('input', () => {
    guitarBody.style.fill = input1.value;
})

input2.addEventListener('input', () => {
    griff.style.fill = input2.value;
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}