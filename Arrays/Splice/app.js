//Use the splice method to add two game names ‘Polo’ and ‘Kabaddi’ to the same array at the third index using the splice method 
let games=['hockey', 'cricket','football', 'badminton', 'ludo'];
let add= games.splice(2,0, " Polo and Kabaddi");
console.log(games);