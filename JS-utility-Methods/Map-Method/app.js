/*
 */


// Use map method to print all of the values and their indices.
let agesArray = [12,45,56,4];
agesArray.map((currElement, index) => {
  console.log( index);
  console.log( currElement);
  console.log("\n");
  //return currElement; //equivalent to list[index]
});

//After that use map method to make a new array from the same array by multiplying each age value by 10.

let agesArray = [12,45,56,4];
let b =agesArray.map(test);
console.log(b);

function test(x){
    return x*10;
    
}