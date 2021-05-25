function isForm(){
    let inputElement = document.querySelector('input');
    console.log(inputElement);

    let inputValue = inputElement.value;
    console.log(inputValue);

    let myElement = document.querySelector( 'h1 > span', alert('The message has been sent on the given number'));
    console.log(myElement);
    
    myElement.innerHTML=inputValue;
   
}