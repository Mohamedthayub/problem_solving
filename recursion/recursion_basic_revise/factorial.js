function factorial(num,fact){
    if(num < 1){
        console.log(fact);
        return;
    }
    factorial(num- 1, fact * num);
}
factorial(5,1);

function factorial2(num2){
    if(num2 == 1){
        return 1;
    }
    return num2 * factorial2(num2 - 1);
}
console.log(factorial2(5));