function factorial2(num){
    if(num == 0){
        return 1;
    }
    return num * factorial2(num -1);
}
console.log(factorial2(5));

// this factorial problem done by functional method 

