// Write a for loop to traverse the array and find if ‘Cricket’ exists in the array. Print ‘Cricket exists’ if it is in the array. Otherwise print ‘Does not exist’

//let games=['hockey', 'cricket','football', 'badminton', 'ludo'];
for (let i=0; i<=games.length ;i++){
    if (games[i]  ==  'cricket'){
     console.log('cricket exists');
    }else 
    console.log('cricket does not exists');
 } 

 //Write a forEach loop and attempt the same problem as above.
games.forEach(function(element){
   console.log(element);
}); 
//Write a for..of loop and attempt the same problem as above
for (const [i,v ] of ['hockey', 'cricket','football', 'badminton', 'ludo'].entries()) {
    console.log(i,v);
  }