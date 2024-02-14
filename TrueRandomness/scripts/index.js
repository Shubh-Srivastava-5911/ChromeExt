const output = document.getElementById("output");
const generate = document.getElementById("generate");
const digits = document.getElementById("digits");
const up = document.getElementById("up");
const down = document.getElementById("down");

generate.addEventListener("click", () => {
    output.innerHTML = Math.floor(Math.random() * Math.pow(10, digits.innerHTML));
});

up.addEventListener("click", () => {
    const n = (+digits.innerHTML) + 1;
    if(n < 10) digits.innerHTML = n; 
});

down.addEventListener("click", () => {
    const n = (+digits.innerHTML) - 1;
    if(n > 0) digits.innerHTML = n; 
});