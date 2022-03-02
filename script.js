
"use strict";

let guitarBody = document.getElementById("guitarBody");
let input1 = document.getElementById("color1");

input1.addEventListener('input', () => {
    guitarBody.style.fill = input1.value;
})
