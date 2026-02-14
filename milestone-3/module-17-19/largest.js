// finding the max value of an array


function maxNumber(numbers){
    let max = numbers[0];

    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    
    return max;
}

const numbers = [10, 3, 44, 57, 283, 43374639, 33864, 7362];
maxValue = maxNumber(numbers);

console.log("Largest number is:", maxValue);