firstul = document.querySelectorAll("ul")[0];

function handleclick(element) {
  element.innerText = firstChildrenArray.indexOf(element) + 1;
  setTimeout(() => {
    element.innerText = "";
  }, 5000);
}
let firstChildrenArray = Array.from(firstul.children);
firstChildrenArray.forEach(function (elem) {
  elem.addEventListener("click", function () {
    handleclick(elem);
  });
});

//Using Event Delegation

secondUl = document.querySelectorAll("ul")[1];
let secondChildrenArray = Array.from(secondUl.children);

function handleclick2(evt) {
  evt.target.innerText = secondChildrenArray.indexOf(evt.target) + 1;
  setTimeout(() => {
    evt.target.innerText = "";
  }, 5000);
  console.dir(evt.target);
}

secondUl.addEventListener("click", function (event) {
  handleclick2(event);
});
