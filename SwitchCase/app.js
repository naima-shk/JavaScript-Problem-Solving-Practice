
function myFunction() {
let  percentage = prompt("What percentage did you get for the assessment?");
let  result; 

switch(percentage){
 case "A": 
   (percentage >85)
    result = "Excellent";
    break;

case "B": 
   (percentage<=85 && percentage >80 )
    result = "Very good";
    break;

case "C":  
   (percentage<=80 && percentage>70)
    result = " good";
    break;

case "D": 
    (percentage<=70 &&  percentage>60)
    result = "Fair";
    break;

case "E": 
    (percentage<=60  &&  percentage>40)
    result = "Poor";
    break;

case "E-": 
    ( percentage<=40 )
    result= ' very poor';
    break;

case "F":
    (percentage<=35 )
    result= 'fail';
    break;
default:
    result = "please enter.."  
}
return result;
}
