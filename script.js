
"use strict";

let guitarBody = document.getElementById("guitarBody");
let colorInp = document.getElementById("colorInp");

guitarBody.style.fill = 'white';

colorInp.addEventListener('input', () => {
    guitarBody.style.fill = colorInp.value;
})
