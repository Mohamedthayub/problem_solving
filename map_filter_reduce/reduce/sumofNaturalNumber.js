let numbers = [1,2,3,4,5,6];

let sum = numbers.reduce((accumulator , currentNumber) => {
    if(currentNumber % 2 != 0){
        return accumulator + currentNumber;
    }
    return accumulator;
},0)
console.log(sum);