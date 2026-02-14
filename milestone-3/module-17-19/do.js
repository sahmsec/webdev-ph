
function doubleOrTriple(num ,doDouble){
    if(doDouble === true){
        const result = num * 2;
        return result;
    }
    else result = num * 3;
    return result;
}

let result1 = 0;

result1 = doubleOrTriple(23, true);
 console.log(result1);

let result2 = 0;

result2 = doubleOrTriple(23, false);
 console.log(result2);