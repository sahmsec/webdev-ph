//reverse an array output

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];


//using .reverse() method
const revNumbers = numbers.reverse();
// console.log(revNumbers);

//using unshift
const reVNumbers = [];
for(const num of numbers){
    reVNumbers.unshift(num)
}
// console.log(reVNumbers);



//using reverse loop
for(let i = numbers.length - 1; i >= 0; i--){
    const num = numbers[i];
    console.log(num);
}




