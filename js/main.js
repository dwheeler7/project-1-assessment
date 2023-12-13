// state variables
let result;
let input;
let sign;

// cached variables
const addBtnEl = document.getElementById("add-btn");
const subtractBtnEl = document.getElementById("sub-btn");
const inputEl = document.getElementById("input");
const resultEl = document.getElementById("result");

// controller

const init = () => {
    result = 0;
}

const calculate = (input, sign) => {    
    inputNum = Number(input);    
    result += inputNum * sign;    
    render();
}

const render = () => {
    if (result < 0) {
        resultEl.classList.add("result--negative");
    } else {
        resultEl.classList.remove("result--negative");
    }
    resultEl.textContent = result;
}

// init
init();

// event listeners
addBtnEl.addEventListener("click", e => {
    e.preventDefault();
    calculate(inputEl.value, 1);
})

subtractBtnEl.addEventListener("click", e => {
    e.preventDefault();
    calculate(inputEl.value, -1);
})