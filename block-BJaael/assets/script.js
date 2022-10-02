function random(num = 0) {
  return Math.floor(Math.random() * num) + 1;
}

let ul = document.querySelector(".container");
for (let i = 0; i < 500; i++) {
  li = document.createElement("li");
  ul.append(li);
}
ul.childNodes.forEach(function (elem) {
  ul.addEventListener("mousemove", () => {
    elem.style.backgroundColor = `rgb(${random(500)},${random(500)},${random(
      500
    )})`;
    elem.innerText = random(500);
  });
});
