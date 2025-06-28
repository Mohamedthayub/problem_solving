function reverseNumber(num){
    let reverseNum = 0;
    while(num > 0){
        let lastdigit = num % 10;
        num = Math.floor(num / 10 );
        reverseNum = (reverseNum * 10) + lastdigit;
    }
    return reverseNum;
}
console.log(reverseNumber(123));