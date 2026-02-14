

function oddAverage(numbers) {
    let oddNumbers = [];
    for (const number of numbers) {
        
        if (number % 2 !== 0) {
            oddNumbers.push(number);
        }


    }

    let sum = 0;
    for (const number of oddNumbers) {
        sum += number;
    }
    return sum/oddNumbers.length;

}

const oddNumbers = [3, 4874, 4746364, 363, 4363, 432, 3322, 22211];
const average = oddAverage(oddNumbers);

console.log('Average: ', average);

