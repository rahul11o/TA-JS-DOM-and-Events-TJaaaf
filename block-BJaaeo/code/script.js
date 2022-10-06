let button = document.querySelectorAll("button");

button.forEach((elem) => {
  elem.classList.add("box");
});

let output = document.querySelector(".output");
let input = document.querySelector(".input");
let expression = "";
function handleClick(evt) {
  if (evt.target.innerText !== "=" && evt.target.innerText !== "C") {
    expression += evt.target.innerText;
    output.innerText = expression;
  } else if (evt.target.innerText === "=") {
    result = eval(expression);
    output.innerText = result;
  } else if (evt.target.innerText === "C") {
    expression = "";
    output.innerText = expression;
  }
}
input.addEventListener("click", function (event) {
  handleClick(event);
});
