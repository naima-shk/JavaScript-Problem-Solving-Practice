//1-Declare a variable using let inside a function. Add that same variable in another function and see what happens.

/*function myNumber(name){
    let name='naima';
    console.log(name);
    
  }
  myNumber()
  
  function myName(name){
     let name='naima';
     console.log(name);
  }
  myName() */

  //it is throwing this line of error /*Uncaught SyntaxError: Identifier 'name' has already been declared */

  //2-Now declare a variable using var in a block and try reassigning the value to that variable in another block and see if it throws an error or not.
  /*{
      var car= 'civic';
      console.log(car);
  }

  {
      car = 'corolla';
      console.log(car);
  } */
  //Create a global variable and try using that variable in another function and see if you're able to access that variable.
   let name ='naima'; //global variable
   function a(){
       alert(name);
   }
   function b(){
       alert(name);
   }