// function findpowerofN(num ,square){
//     let result = 1;
//     for(let i = 1; i <= square; i++){
//         result = result * num;
//     }
//     console.log(result);
// }
// findpowerofN(9,5);

function findPowerNumber(num,power,result){
    if(power < 1){
        console.log(result);
        return;
    }
    findPowerNumber(num, power- 1, result * num);
}
findPowerNumber(3,3,1);