const alphabets =['a', 'x', 'f', 'y', 'i'];

alpSort = alphabets.sort();
// console.log(alpSort);

const names = ["Sakib", "Akib", "Rakib", "ashraful", "Bhodai"];
nameSort = names.sort();
// console.log(nameSort);

const numbers = [1, 5, 9, 8, 12, 16];
numSort = numbers.sort();
// console.log(numSort);

//special function to sort it properly, ... is for copying the array
const numAsc = [...numbers].sort(function(a, b) {return a - b});
console.log(numAsc);

const numDes = [...numbers].sort(function(a, b) {return b - a});
console.log(numDes);
