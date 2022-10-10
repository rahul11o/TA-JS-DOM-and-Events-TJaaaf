let form = document.querySelector("form");
let modal = document.querySelector(".modal");
let closeButton = document.querySelector(".close");
let userInformation = {};

function handlesubmit(event) {
  event.preventDefault();
  userInformation.name = form.elements.name.value;
  userInformation.email = form.elements.email.value;
  userInformation["you Love"] = form.elements.youLove.value;
  userInformation.color = form.elements.color.value;
  userInformation.rating = form.elements.rating.value;
  userInformation["Book Genre"] = form.elements.drone.value;
  console.log(userInformation);
  heading = document.querySelector(".heading");
  para1 = document.querySelector(".para1");
  para2 = document.querySelector(".para2");
  para3 = document.querySelector(".para3");
  para4 = document.querySelector(".para4");
  para5 = document.querySelector(".para5");
  anchortag = document.querySelector("a");
  heading.innerText = `Hello ${userInformation.name}`;
  para1.innerText = `Email : ${userInformation.email}`;
  para2.innerText = `You Love : ${userInformation["you Love"]}`;
  para3.innerText = `color : ${userInformation.color}`;
  para4.innerText = `rating : ${userInformation.rating}`;
  para5.innerText = `Book Genre : ${userInformation["Book Genre"]}`;
  modal.style.display = "block";
}

form.addEventListener("submit", handlesubmit);

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});
