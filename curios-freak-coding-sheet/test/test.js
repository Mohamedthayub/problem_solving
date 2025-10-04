function reverseNumber(num){
   let reverseNum = 0;
   while(num > 0){
    let lastDigit = num % 10;
    reverseNum = (reverseNum * 10) + lastDigit;
    num = Math.floor(num / 10);
   }
   let result = num ** reverseNum;
   return result;
    
}
console.log(reverseNumber(123));