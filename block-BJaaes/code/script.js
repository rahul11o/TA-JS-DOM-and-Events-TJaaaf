let form = document.querySelector("form");

function handlesubmit(event) {
  event.preventDefault();
  let elements = event.target.elements;

  //   if (elements.username.value.length < 4) {
  //     elements.username.nextElementSibling.innerText = `${elements.username.value} can't be less than 4 characters `;
  //   } else {
  //     elements.username.nextElementSibling.innerText = "";
  //   }

  if (typeof elements.name.value === "number") {
    elements.name.nextElementSibling.innerText = `Name can't be numbers`;
  } else if (typeof +elements.name.value !== "number") {
    elements.name.nextElementSibling.innerText = "";
  }
}

form.addEventListener("submit", handlesubmit);
