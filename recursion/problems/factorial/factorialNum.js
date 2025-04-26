function  factorial(num,fact){
    if(num < 1){
        console.log(fact);
        return;
    }
    factorial( num - 1, fact * num);
}
factorial(5,1);


//this is done by argument method 

