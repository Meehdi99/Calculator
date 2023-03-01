// Add interaction with keys

let a = 0,
  op = "",
  b = 0;

const displayable = document.querySelectorAll(".dis");
const clear = document.querySelector(".clear");
const currentDis = document.querySelector(".display");
const operation = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const del = document.querySelector(".delete");
const dot = document.querySelector(".dot");

window.addEventListener("keydown", (board) => {
  if (board.key === "Escape") {
    document.getElementById("clear").click();
  }
});

dot.addEventListener("click", () => {
  if (!currentDis.textContent.includes(".")) show(".");
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
  button.addEventListener("click", () => show(button.textContent))
);

equals.addEventListener("click", () => {
  b = Number(currentDis.textContent);
  calculate();
  a = currentDis.textContent;
  op = "";
});

function operate(operator) {
  if (op == "") a = Number(currentDis.textContent);
  else {
    b = Number(currentDis.textContent);
    calculate();
    a = Number(currentDis.textContent);
    op = "";
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
    case "x":
      displayRes(multiply(a, b));
      break;
    case "/":
      displayRes(divide(a, b));
      break;
  }
}

function show(dis) {
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

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
