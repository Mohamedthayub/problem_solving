function plusOne(arr){
    for(let i = arr.length -1 ; i>=0; i--){
        if(arr[i] < 9){
            arr[i] += 1;
            return arr;
        }
        else{
            arr[i] = 0;
        }
    }
    arr.unshift(1);
    return arr;
}
console.log(plusOne([9,9,9]));

/*
Given a non-negative number represented as a list of digits, add 1 to the number (increment the number represented by the digits). The digits are stored such that the most significant digit is first element of array.
 

Example 1:

Input: 
N = 3
arr[] = {1, 2, 4}
Output: 
1 2 5
Explanation:
124+1 = 125, and so the Output
Example 2:

Input: 
N = 3
arr[] = {9,9,9}
Output: 
1 0 0 0
Explanation:
999+1 = 1000, and so the output

*/