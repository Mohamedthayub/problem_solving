function sumOf(num){
    let sum = 0;
    while(num > 0){
        sum = sum + num % 10;
        num = Math.floor(num / 10);
    }
    if(sum > 9){
        return sumOf(sum);
    }
    
    return sum;
}
console.log(sumOf(1234));