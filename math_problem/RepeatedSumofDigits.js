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


/*
Given an integer N, recursively sum digits of N until we get a single digit.  The process can be described below

If N < 10    
    digSum(N) = N
Else         
    digSum(N) = Sum(digSum(N))

 

Example 1:

Input:
N = 1234
Output:
1
Explanation:
The sum of 1+2+3+4 = 10, 
digSum(x) == 10 Hence 
ans will be 1+0 = 1

*/