

function noDuplicates(array){
    const uniqueArr = [];

    for(const item of array){
        if(!uniqueArr.includes(item)){
            uniqueArr.push(item);
        }
    }

    return uniqueArr;
}


const names = ['abul', 'kabul', 'babul', 'chabul', 'babul', 'abul', 'lalu'];

const uniqueList = noDuplicates(names);
console.log(uniqueList);

const rolls = [1, 2, 3, 4, 3, 5, 6, 9, 6];
const uniqueRolls = noDuplicates(rolls);
console.log(uniqueRolls);