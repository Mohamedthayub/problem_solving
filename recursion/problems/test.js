function  power(num ,pow){
    for(let i = 1; i<=pow; i++){
        num  = num * i;
    }
    return num;
}
console.log(power(2,4));
// let num = 2;
// for(let i = 1 ; i<=3; i++){
//     num = num * i;
// }
// console.log(num);