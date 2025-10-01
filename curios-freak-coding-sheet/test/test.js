let n = 20;
let reverseNum = 0;
while(n != 0){
    let lastDigit = n % 10; 
    if(lastDigit == 0){
        n = Math.floor(n / 10);
        continue;
    }
    reverseNum = (reverseNum * 10) + lastDigit;
    n = Math.floor(n / 10);
}
console.log(reverseNum);

// 20
