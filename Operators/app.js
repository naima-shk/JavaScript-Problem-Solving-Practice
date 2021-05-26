var x = 5;
var  y = 10;
var  z = 15;

//x + y;
console.log(x+y);

//y - x
console.log(y - x);

//x * y
console.log(x * y);

//y / x; 
console.log(y / x);

//x % 2; 
console.log(x % 2);

//x++; 
console.log(x++);

//x--
console.log(x--);


var a = 5;
var  b = 10;
var c = "5";

var x = a;

//a == c;
console.log(a == c);

//a === c;
console.log(a === c);

//a == x; 
console.log(a == x);

//a != b; 
console.log(a != b);

//a > b;
console.log(a > b);

//a < b;
console.log(a < b);

//a >= b; 
console.log(a >= b);

//a <= b; 
console.log(a <= b);

//a >= c; 
console.log(a >= c);

//a <= c;
console.log(a <= c);

// Write a program that uses logical and assignment operators.

/* pseduocode of the program
1. get english marks
2.get maths marks
3.get science marks
4.is student pass in english or not.
5.is student pass in maths or not.
6.is student pass in exam or not.
*/
const passingMarks = 35;

function checkMarks(){
    let englishMarks=parseInt(document.querySelector('#english').value);
    let mathsMarks=parseInt(document.querySelector('#maths').value);
    
    let englishPass = englishMarks >= passingMarks;
    let mathsPass = mathsMarks >= passingMarks;
    let examPass = englishPass && mathsPass;
    alert (examPass);

}