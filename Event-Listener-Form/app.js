function validation(){
  let email= document.getElementById('email').value;
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
  {
    alert("You have entered a valid email address!")
  } else {
    
    alert("You have entered an invalid email address!")
  
}

  let password= document.getElementById('password').value;
  if (/^[A-Za-z]\w{7,14}$/){
    alert(' you have entered  a valid password')
  } else{
    alert ('you have entered  an  invalid password')
  }
 
}

/* function submitFunction() {
  login = document
    .getElementById("#login")
    .addEventListener("submit", submitFunction, true);
  let email = document.getElementById("#email");
  let password = document.getElementById("#password");
  console.log(alert("form submitted"));
  /*let  emailValue = email.value;
    let  passwordValue = password.value;
  if (email === "") {
    alert("Email cannot be blank");
  } else if (!isEmail(email)) {
    alert("Not a valid email");
  } else {
    alert("email is valid");
  }
  if (password.length <= 8) {
    console.log(alert("Password cannot be blank"));
  } else {
    console.log(alert("password is filled"));
  }
  console.log(alert("login succesfully"));
}
*/