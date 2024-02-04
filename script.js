
"use strict";

const guitarBody = document.getElementById("guitarBody");
const colorInp = document.getElementById("colorInp");
const griff = document.getElementById("griff");

guitarBody.style.fill = 'white';

colorInp.addEventListener('input', () => {
    guitarBody.style.fill = colorInp.value;
    griff.style.fill = colorInp.value;
})
