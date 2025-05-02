function powerofNumber(num1,square){
    let result = 1;
    for(let i = 1; i<=square; i++){
        result = result  * num1;
    }
    return result;
}
console.log(powerofNumber(2,3));