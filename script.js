// fix the dot spam
// Add interaction with keys
// calculate without the equal

let a = 0,
  op = "",
  b = 0;

const displayable = document.querySelectorAll(".dis");
const clear = document.querySelector(".clear");
const disCurrent = document.querySelector(".display");
const operation = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const del = document.querySelector(".delete");

del.addEventListener("click", () => deletion());

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

equals.addEventListener("click", () => calculate());

function deletion() {
  if (!(disCurrent.textContent == "0")) {
    disCurrent.textContent = disCurrent.textContent.slice(0, -1);
  }
}

function show(dis) {
  if (disCurrent.textContent != "0") {
    if (disCurrent.textContent.length < 8) {
      if ((dis >= 0 && dis <= 9) || dis == ".") disCurrent.textContent += dis;
    }
  } else disCurrent.textContent = dis;
}

function operate(operator) {
  if (op == "") a = Number(disCurrent.textContent);
  op = operator;
  disCurrent.textContent = "";
}

function calculate() {
  b = Number(disCurrent.textContent);
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
  a = disCurrent.textContent;
  op = "";
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
