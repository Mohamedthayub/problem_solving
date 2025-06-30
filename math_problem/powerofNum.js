function powerofNumber(num1,power){
    let result = 1;
    for(let i = 1; i <= power; i++){
        result = result  * num1;
    }
    return result;
}
console.log(powerofNumber(2,3));