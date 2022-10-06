let userArray = Array.from(document.querySelectorAll(".user button"));
let computer = document.querySelector(".computer");
let comSpan = computer.querySelectorAll("button span");
let resultText = document.querySelector(".result-text");

let refreshBtn = document.querySelector(".spc-btn");
let subContainer = document.querySelector(".sub-cont");

let userParaSpan = document.querySelector(".user p span");
let rockU = document.querySelector(".rockU");
let paperU = document.querySelector(".paperU");
let scissorsU = document.querySelector(".scissorsU");
let rockC = document.querySelector(".rockC");
let paperC = document.querySelector(".paperC");
let scissorsC = document.querySelector(".scissorsC");
let compParaSpan = document.querySelector(".computer p span");

function randomNum() {
  return Math.floor(Math.random() * 3) + 1;
}
let won = 0;
let lost = 0;

function handleClick(element) {
  rockU.style.color = "#1c90ff";
  paperU.style.color = "#1c90ff";
  scissorsU.style.color = "#1c90ff";
  rockC.style.color = "red";
  paperC.style.color = "red";
  scissorsC.style.color = "red";
  let userSpan = element.querySelector("span");
  userSpan.innerText = randomNum();
  if (userArray.indexOf(element) === 0) {
    if (comSpan[0].innerText === userSpan.innerText) {
      resultText.innerText = "It's a Tie.";
      rockU.style.color = "black";
      rockC.style.color = "black";
    } else if (comSpan[1].innerText === userSpan.innerText) {
      resultText.innerText = "You Lost!.";
      rockU.style.color = "black";
      paperC.style.color = "black";
      lost = lost + 1;
      compParaSpan.innerText = eval(lost);
    } else if (comSpan[2].innerText === userSpan.innerText) {
      resultText.innerText = "You won!.";
      rockU.style.color = "black";
      scissorsC.style.color = "black";
      won = won + 1;
      userParaSpan.innerText = eval(won);
    }
  } else if (userArray.indexOf(element) === 1) {
    if (comSpan[0].innerText === userSpan.innerText) {
      resultText.innerText = "You Won.";
      paperU.style.color = "black";
      rockC.style.color = "black";
      won = won + 1;
      userParaSpan.innerText = eval(won);
    } else if (comSpan[1].innerText === userSpan.innerText) {
      resultText.innerText = "It's a tie.";
      paperU.style.color = "black";
      paperC.style.color = "black";
    } else if (comSpan[2].innerText === userSpan.innerText) {
      resultText.innerText = "You Lost!.";
      paperU.style.color = "black";
      scissorsC.style.color = "black";
      lost = lost + 1;
      compParaSpan.innerText = eval(lost);
    }
  } else if (userArray.indexOf(element) === 2) {
    if (comSpan[0].innerText === userSpan.innerText) {
      resultText.innerText = "You Lost!.";
      scissorsU.style.color = "black";
      rockC.style.color = "black";
      lost = lost + 1;
      compParaSpan.innerText = eval(lost);
    } else if (comSpan[1].innerText === userSpan.innerText) {
      resultText.innerText = "You Won!.";
      scissorsU.style.color = "black";
      paperC.style.color = "black";
      won = won + 1;
      userParaSpan.innerText = eval(won);
    } else if (comSpan[2].innerText === userSpan.innerText) {
      resultText.innerText = "It's a Tie.";
      scissorsU.style.color = "black";
      scissorsC.style.color = "black";
    }
  }
}
userArray.forEach((elem) => {
  elem.addEventListener("click", function () {
    handleClick(elem);
  });
});

refreshBtn.addEventListener("click", function () {
  won = 0;
  lost = 0;
  userParaSpan.innerText = eval(won);
  compParaSpan.innerText = eval(lost);
  rockU.style.color = "#1c90ff";
  paperU.style.color = "#1c90ff";
  scissorsU.style.color = "#1c90ff";
  rockC.style.color = "red";
  paperC.style.color = "red";
  scissorsC.style.color = "red";
});
