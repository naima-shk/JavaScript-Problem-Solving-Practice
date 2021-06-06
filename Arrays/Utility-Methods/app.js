/* pseudocode
1-Add ‘Polo’ as a member of the same array at the end using one of the utility methods
2-Add ‘Polo’ as a member of the same array at the beginning of the array using one of the utility methods
3-Remove a member of the same array from the end
4-Remove a member of the same array from the beginning
*/
// push 
let games=['hockey', 'cricket','football', 'badminton', 'ludo'];
//games.push('polo');


//unshift
games.unshift('polo');
//console.log(games);

//pop
games.pop();
//console.log(games);

//shift
games.shift();
console.log(games);