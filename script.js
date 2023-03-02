let a = 0,
  b = 0,
  op = "";

const operation = document.querySelectorAll(".operator");
const displayable = document.querySelectorAll(".dis");
const currentDis = document.querySelector(".display");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");
const dot = document.querySelector(".dot");

window.addEventListener("keydown", keysInput);

dot.addEventListener("click", () => {
  if (!currentDis.textContent.includes(".")) showDis(".");
});

del.addEventListener("click", () => {
  if (!(currentDis.textContent == "0")) {
    currentDis.textContent = currentDis.textContent.slice(0, -1);
    if (currentDis.textContent.length == 0) {
      currentDis.textContent = 0;
    }
  }
});

clear.addEventListener(
  "click",
  () => ((currentDis.textContent = "0"), (a = b = 0))
);

operation.forEach((button) =>
  button.addEventListener("click", () => operate(button.textContent))
);

displayable.forEach((button) =>
  button.addEventListener("click", () => showDis(button.textContent))
);

equals.addEventListener("click", () => {
  b = Number(currentDis.textContent);
  calculate();
  a = Number(currentDis.textContent);
  op = "";
});

function operate(operator) {
  if (op == "") a = Number(currentDis.textContent);
  else {
    equals.click();
  }
  currentDis.textContent = "";
  op = operator;
}

function calculate() {
  switch (op) {
    case "+":
      displayRes(add(a, b));
      break;
    case "-":
      displayRes(subtract(a, b));
      break;
    case "×":
      displayRes(multiply(a, b));
      break;
    case "÷":
      displayRes(divide(a, b));
      break;
  }
}

function showDis(dis) {
  if (currentDis.textContent != "0" || dis == ".") {
    if (currentDis.textContent.length < 8) {
      if ((dis >= 0 && dis <= 9) || dis == ".") currentDis.textContent += dis;
    }
  } else currentDis.textContent = dis;
}

function displayRes(res) {
  if (res.toString().length < 8) currentDis.textContent = res;
  else currentDis.textContent = res.toExponential(2);
}

function keysInput(e) {
  if (e.key >= 0 && e.key <= 9) showDis(e.key);
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
