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

cancel.addEventListener("click", clear);

numBtns.forEach((btn) => {
  btn.addEventListener("click", enterDigit);
});

operatorBtns.forEach((btn) => {
  btn.addEventListener("click", operatorClick);
});

equals.addEventListener("click", equal);

function clear() {
  currentTotal = "0";
  num1 = null;
  num2 = null;
  newNum = true;
  updateDisplay();
}

function updateDisplay() {
  display.innerText = currentTotal;
  checkCriminalScum();
}

function enterDigit(e) {
  if (display.textContent === "0" || newNum) {
    currentTotal = e.target.textContent;
    newNum = false;
  } else {
    currentTotal += e.target.textContent;
  }
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
    newNum = true;
  } else {
    console.log(num1, num2, operator);
  }
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
  num2 = currentTotal;
  doMath(num1, num2, operator);
  newNum = true;
  num1 = null;
  num2 = null;
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

// numBtns.forEach((btn) => {
//   btn.addEventListener("click", updateDisplay);
// });

// operatorBtns.forEach((btn) => {
//   btn.addEventListener("click", saveNumberAndOperator);
// });

// equals.addEventListener("click", doMath);

// function updateDisplay(e) {
//   if (display.textContent === "0" || newNum) {
//     display.textContent = e.target.textContent;
//     newNum = false;
//   } else {
//     display.textContent += e.target.textContent;
//   }
// }

// function saveNumberAndOperator(e) {
//   switch (e.target.value) {
//     case "add":
//       operator = add;
//       break;
//     case "subtract":
//       operator = subtract;
//       break;
//     case "multiply":
//       operator = multiply;
//       break;
//     case "divide":
//       operator = divide;
//       break;
//   }
//   if (num1 && newNum) {
//     num2 = display.textContent;
//     doMath();
//   } else {
//     num1 = display.textContent;
//   }
//   newNum = true;
// }

// function doMath() {
//   num2 = display.textContent;
//   display.textContent = operate(num1, num2, operator);
//   num1 = display.textContent;
//   num2 = null;
//   newNum = true;
// }

// function chain() {}
