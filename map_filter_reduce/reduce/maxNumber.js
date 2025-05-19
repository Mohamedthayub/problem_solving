const numbers = [1, 8, 3, 4, 10];


const largest = numbers.reduce((curr,acc) => {
    if(curr > acc){
        return curr
    }
    else{
        return acc;
    }
})
console.log(largest);