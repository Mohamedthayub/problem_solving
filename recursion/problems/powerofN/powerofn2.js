function powerofN(number,power,result =1){
    if(power < 1){
        return result;
    }
    return powerofN(number,power - 1, result * number);
}
console.log(powerofN(3,3));