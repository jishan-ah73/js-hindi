
const game = new String("joker-jan-waar");

// console.log(game[4]);
// console.log(game.toUpperCase());
// console.log(game.toLowerCase());
// console.log(game.length);


// console.log(game.charAt(4));

// console.log(game.indexOf('k'));

const newString = game.substring(-4,5);
// console.log(newString);

const anotherSting = game.slice(-6,2);
// console.log(anotherSting);

const newStringOne = "      joker.   ";
console.log(newStringOne);       // space bhi print hota hai 
console.log(newStringOne.trim());    // trim() staring space aur end space ko remove kr deta hai


const url = "https://jokerjan.com/joker%20gam";
console.log(url.replace('%20','-'));
console.log(url.includes('joker'));

console.log(game.split('-'));
