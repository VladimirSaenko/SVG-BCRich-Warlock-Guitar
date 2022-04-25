
"use strict";

let guitarBody = document.getElementById("guitarBody");
let input1 = document.getElementById("color");

guitarBody.style.fill = 'white';

input1.addEventListener('input', () => {
    guitarBody.style.fill = input1.value;
})
