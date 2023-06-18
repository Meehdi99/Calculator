let a = 0,
  b = 0,
  op = "";

const operation = document.querySelectorAll(".operator");
const displayable = document.querySelectorAll(".dis");
const currentDisplay = document.querySelector(".display");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");
const dot = document.querySelector(".dot");

window.addEventListener("keydown", keysInput);

dot.addEventListener("click", () => {
  if (!currentDisplay.textContent.includes(".")) showDisplay(".");
});

del.addEventListener("click", () => {
  currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
  if (currentDisplay.textContent.length == 0) {
    currentDisplay.textContent = 0;
  }
});

clear.addEventListener(
  "click",
  () => ((currentDisplay.textContent = "0"), (a = b = 0), (op = ""))
);

operation.forEach((button) =>
  button.addEventListener("click", () => operate(button.textContent))
);

displayable.forEach((button) =>
  button.addEventListener("click", () => showDisplay(button.textContent))
);

equals.addEventListener("click", () => {
  b = Number(currentDisplay.textContent);
  calculate();
  a = Number(currentDisplay.textContent);
  op = "";
});

function operate(operator) {
  if (!op) a = Number(currentDisplay.textContent);
  else {
    equals.click();
  }
  currentDisplay.textContent = "";
  op = operator;
}

function calculate() {
  switch (op) {
    case "+":
      displayResult(add(a, b));
      break;
    case "-":
      displayResult(subtract(a, b));
      break;
    case "×":
      displayResult(multiply(a, b));
      break;
    case "÷":
      displayResult(divide(a, b));
      break;
  }
}

function showDisplay(display) {
  if (currentDisplay.textContent != "0" || display == ".") {
    if (currentDisplay.textContent.length < 8) {
      if ((display >= 0 && display <= 9) || display == ".")
        currentDisplay.textContent += display;
    }
  } else currentDisplay.textContent = display;
}

function displayResult(result) {
  if (result.toString().length < 8) currentDisplay.textContent = result;
  else currentDisplay.textContent = result.toExponential(2);
}

function keysInput(e) {
  if (e.key >= 0 && e.key <= 9) showDisplay(e.key);
  if (e.key === ".") dot.click();
  if (e.key === "=" || e.key === "Enter") equals.click();
  if (e.key === "Backspace") del.click();
  if (e.key === "Escape") clear.click();
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    if (e.key === "*") operate("×");
    else if (e.key === "/") operate("÷");
    else operate(e.key);
  }
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
