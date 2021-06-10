
  
function submitFunction() {
   let  login = document
    .getElementById("login")
    .addEventListener("submit", submitFunction, true);
  let email = document.getElementById("email");
  let password = document.getElementById("password");

 alert("form submitted");
  let  emailValue = email.value;
	let  passwordValue = password.value; 
  if (emailValue === "") {
    alert("Email cannot be blank");
  } else if (!isEmail(email)) {
    alert("Not a valid email");
  } else {
    alert("email is valid");
  }

  if (passwordValue.length <= 8) {
    console.log(alert("Password cannot be blank"));
  } else {
    console.log(alert("password is filled"));
  }
  console.log(alert("login succesfully"));
}
