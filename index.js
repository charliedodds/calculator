function add(x, y) {
  return +x + +y;
}

function subtract(x, y) {
  return +x - +y;
}

function multiply(x, y) {
  return +x * +y;
}

function divide(x, y) {
  if (x == 0 || y == 0) {
    return criminalScum;
  } else {
    return +x / +y;
  }
}

function operate(num1, num2, operator) {
  return operator(num1, num2);
}

let currentTotal = "0";
let num1;
let operator;
let num2;
let newNum = true;
let criminalScum = "STOP RIGHT THERE CRIMINAL SCUM!";

const numBtns = document.querySelectorAll(".number");
const display = document.querySelector("#output");
const cancel = document.querySelector(".cancel");
const operatorBtns = document.querySelectorAll(".operator");
const equals = document.querySelector(".submit");
const decimal = document.querySelector(".decimal");
const backspace = document.querySelector(".backspace");

cancel.addEventListener("click", clear);

numBtns.forEach((btn) => {
  btn.addEventListener("click", enterDigit);
});

operatorBtns.forEach((btn) => {
  btn.addEventListener("click", operatorClick);
});

equals.addEventListener("click", equal);

decimal.addEventListener("click", decimalClick);

backspace.addEventListener("click", backspaceClick);

function clear() {
  currentTotal = "0";
  num1 = null;
  num2 = null;
  newNum = true;
  updateDisplay();
  enableDecimal();
  disableBackspace();
}

function updateDisplay() {
  display.innerText = currentTotal;
  checkCriminalScum();
  if (currentTotal === "") {
    disableBackspace();
  }
}

function enterDigit(e) {
  if (display.textContent === "0" || newNum) {
    currentTotal = e.target.textContent;
    newNum = false;
  } else {
    currentTotal += e.target.textContent;
  }
  enableBackspace();
  updateDisplay();
}

function doMath(num1, num2, operator) {
  currentTotal = operate(num1, num2, operator);
  updateDisplay();
}

function operatorClick(e) {
  if (!num1) {
    num1 = currentTotal;
    newNum = true;
  } else if (num1) {
    num2 = currentTotal;
    doMath(num1, num2, operator);
    num1 = currentTotal;
    num2 = null;
    newNum = true;
  }
  enableDecimal();
  disableBackspace();
  switch (e.target.value) {
    case "add":
      operator = add;
      break;
    case "subtract":
      operator = subtract;
      break;
    case "multiply":
      operator = multiply;
      break;
    case "divide":
      operator = divide;
      break;
  }
}

function equal() {
  if (num1 && operator) {
    num2 = currentTotal;
    doMath(num1, num2, operator);
    newNum = true;
    num1 = null;
    num2 = null;
    enableDecimal();
    disableBackspace();
  }
}

function checkCriminalScum() {
  if (display.textContent === criminalScum) {
    display.style.fontSize = "1.3rem";
    display.style.margin = "auto";
    newNum = true;
    currentTotal = "0";
  } else {
    display.style.fontSize = "5rem";
    display.style.margin = "0";
  }
}

function addDecimal(e) {
  currentTotal += e.target.textContent;
  newNum = false;
  disableDecimal();
  updateDisplay();
}

function disableDecimal() {
  decimal.disabled = true;
}

function enableDecimal() {
  decimal.disabled = false;
}

function decimalClick(e) {
  addDecimal(e);
  disableDecimal();
}

function backspaceClick() {
  if (typeof currentTotal === "string") {
    currentTotal = currentTotal.slice(0, -1);
    updateDisplay();
  }
}

function disableBackspace() {
  backspace.disabled = true;
}

function enableBackspace() {
  backspace.disabled = false;
}
