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
    return "STOP RIGHT THERE CRIMINAL SCUM";
  } else return +x / +y;
}

function operate(num1, num2, operator) {
  return operator(num1, num2);
}
