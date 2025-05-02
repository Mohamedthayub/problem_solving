function findPowerNumber(num,power,result){
    if(power < 1){
        console.log(result);
        return;
    }
    findPowerNumber(num, power- 1, result * num);
}
findPowerNumber(3,3,1);