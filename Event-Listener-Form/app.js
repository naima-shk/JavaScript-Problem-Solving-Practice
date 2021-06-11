let login = document
  .getElementById("login")
  .addEventListener("submit", submitFunction, true);
let email = document.getElementById("email");
let password = document.getElementById("password");


let pattern = new RegExp(pattern,email);
alert("form submitted");
let emailValue = email.value;
let passwordValue = password.value;
function submitFunction() {
  if (emailValue === "") {
    alert("Email cannot be blank");
  } else if (!emailValue(email)) {
    alert("Not a valid email");
  } else {
    alert("email is valid");
  }

  if (passwordValue.length <= 8) {
    alert("Password cannot be blank");
  } else {
    alert("password is filled")
  }
  alert("login succesfully");
}

