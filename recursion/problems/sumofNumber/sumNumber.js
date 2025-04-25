let sum = 0;
function sumof(num){
    if(num < 1){
        return ;
    }
    sum = sum + num
    sumof(num - 1);
    return sum;
}
console.log(sumof(5));


// this is was my first  approach when i see the problem statement after that i watched that video then solved in that approach 
