function sumofNumber(i, sum){
    if(i < 1){
        console.log(sum);
        return ;
    }
    sumofNumber(i-1, sum+i);
}
sumofNumber(5,0);
// sum of the N number using recursion  




// this approach is parsing argument to function  
