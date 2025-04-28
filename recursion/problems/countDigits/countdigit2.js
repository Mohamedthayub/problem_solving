function  counter(num){
    if(num < 10){
        return  1;
    }
    return 1 + counter(Math.floor(num / 10));
}
console.log(counter(12345))