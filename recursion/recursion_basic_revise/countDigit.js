function countDigit(num,count){
    if(num == 0){
        console.log(count);
        return;
    }
    countDigit(Math.floor(num / 10), count + 1);
}
countDigit(123,0);

// count the digits using recursion  
