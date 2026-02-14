

function evenNumbers(numbers){

    const evens = [];
    for(const number of numbers){
        if(number % 2 === 0){
            evens.push(number);
        }
    }

    return evens;
}

function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        sum += number;
    }
    return sum;
}

const numbers = [1, 4, 5, 3983, 2, 4, 3000, 2220, 392];

const evens = evenNumbers(numbers);

console.log(evens);


const sumOfEvens = sumOfEvenNumbers(evens);
console.log('Sum of all the even numbers is:',sumOfEvens);