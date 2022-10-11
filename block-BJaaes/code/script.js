let form = document.querySelector("form");

let errorMessage = {};
function displayError(name) {
  let elem = form.elements[name];
  elem.nextElementSibling.innerText = errorMessage[name];
  elem.classList.add("error");
  elem.classList.remove("success");
}
function displaySuccess(name) {
  let elem = form.elements[name];
  elem.nextElementSibling.innerText = "";
  errorMessage[name] = "";
  elem.classList.remove("error");
  elem.classList.add("success");
}
function handlesubmit(event) {
  event.preventDefault();
  let elements = event.target.elements;
  let username = elements.username.value;
  let name = elements.name.value;
  let email = elements.email.value;
  let phone = elements.phone.value;
  let password = elements.password.value;
  let confirm_password = elements["confirm_password"].value;

  if (username.length < 4) {
    errorMessage["username"] = `Username can't be less than 4 characters `;
    displayError("username");
  } else {
    displaySuccess("username");
  }
  //
  if (!isNaN(name)) {
    errorMessage["name"] = `Name can't be a number`;
    displayError("name");
  } else {
    displaySuccess("name");
  }
  //
  if (!email.includes("@")) {
    errorMessage["email"] = `Email must contain @`;
    displayError("email");
  } else if (email.length < 6) {
    errorMessage["email"] = `Email must be atleast 6 characters long`;
    displayError("email");
  } else {
    displaySuccess("email");
  }
  //
  if (isNaN(phone)) {
    errorMessage["phone"] = `Phone number can only contain numbers`;
    displayError("phone");
  } else if (phone.length < 7) {
    errorMessage["phone"] = `Phone no must be atleat  7 digit long`;
    displayError("phone");
  } else {
    displaySuccess("phone");
  }
  //
  if (password !== confirm_password) {
    errorMessage["password"] = `passwor and confirm_password should be same`;
    errorMessage[
      "confirm_password"
    ] = `passwor and confirm_password should be same`;
    displayError("password");
    displayError("confirm_password");
  } else {
    displaySuccess("password");
    displaySuccess("confirm_password");
  }
}

form.addEventListener("submit", handlesubmit);
