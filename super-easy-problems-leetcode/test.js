let num = 1248;
let temp = num;
let count = 0;
while(num > 0){
    let divide = num % 10;
    if(temp % divide === 0){
        count++;
    }
    num = Math.floor(num / 10);
}
console.log(count);