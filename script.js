const displayable = document.querySelectorAll(".dis");
const clear = document.querySelector(".clear");
const disCurrent = document.querySelector(".display");

clear.addEventListener("click", () => location.reload());

displayable.forEach((button) =>
  button.addEventListener("click", () => show(button.innerHTML))
);

function show(dis) {
  disCurrent.textContent += dis;
}

// const operate = function (callback, a, b) {};

// const display = function (args) {};

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
