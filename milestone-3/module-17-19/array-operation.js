

/*
function sum(numbers){
    let  i = 0;
    let sum = 0;
    
    while(i < numbers.length){
        sum += numbers[i];
        i++;
    }
    return sum;
}
*/


function sum(numbers){
    let sum = 0;
    console.log("All the numbers to add:");
    for(const number of numbers){
        console.log(number);
        sum += number;
        
    }
    return sum;
}

const numbers = [1, 5, 5, 7, 100, 493, 1263, 289372893, 277];

const result = sum(numbers);
console.log("The sum of all the given", numbers.length, "numbers is:", result);