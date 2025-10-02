let factorial = 0;
let num = 153;
while(num > 0){
    let last = num % 10;
    factorial = factorial + (last * last * last);
    num = Math.floor(num / 10);

}
console.log(factorial);