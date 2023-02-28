// Add interaction with keys
// Display first

let a = 0,
  op = "",
  b = 0;

const displayable = document.querySelectorAll(".dis");
const clear = document.querySelector(".clear");
const disCurrent = document.querySelector(".display");
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
  if (!disCurrent.textContent.includes(".")) show(".");
});

del.addEventListener("click", () => {
  if (!(disCurrent.textContent == "0")) {
    disCurrent.textContent = disCurrent.textContent.slice(0, -1);
    if (disCurrent.textContent.length == 0) {
      disCurrent.textContent = 0;
    }
  }
});

clear.addEventListener(
  "click",
  () => ((disCurrent.textContent = "0"), (a = b = 0))
);

operation.forEach((button) =>
  button.addEventListener("click", () => operate(button.textContent))
);

displayable.forEach((button) =>
  button.addEventListener("click", () => show(button.textContent))
);

equals.addEventListener("click", () => {
  b = Number(disCurrent.textContent);
  calculate();
  a = disCurrent.textContent;
  op = "";
});

function show(dis) {
  if (disCurrent.textContent != "0" || dis == ".") {
    if (disCurrent.textContent.length < 8) {
      if ((dis >= 0 && dis <= 9) || dis == ".") disCurrent.textContent += dis;
    }
  } else disCurrent.textContent = dis;
}

function operate(operator) {
  if (op == "") a = Number(disCurrent.textContent);
  else {
    b = Number(disCurrent.textContent);
    calculate();
    a = Number(disCurrent.textContent);
    disCurrent.textContent = a;
    op = "";
  }
  disCurrent.textContent = "";
  op = operator;
}

function calculate() {
  switch (op) {
    case "+":
      display(add(a, b));
      break;
    case "-":
      display(subtract(a, b));
      break;
    case "x":
      display(multiply(a, b));
      break;
    case "/":
      display(divide(a, b));
      break;
  }
}

function display(res) {
  if (res.toString().length < 8) disCurrent.textContent = res;
  else disCurrent.textContent = res.toExponential(2);
}

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};
