
function isOdd(number){
    if(number % 2 === 1){
        return true;
    }
    return false;  
}

const number = 6463846238363;
const checkOdd = isOdd(number);

if(checkOdd === true){
    console.log("This number", number, "is odd.");
}
else console.log("This number", number, "is even.");