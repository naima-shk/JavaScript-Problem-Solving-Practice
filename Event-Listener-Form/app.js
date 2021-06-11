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