/*
Given a number n, check if the number is perfect or not. A number is said to be perfect if sum of all its factors excluding the number itself is equal to the number.

Examples:

Input: n = 6
Output: true 
Explanation: Factors of 6 are 1, 2, 3 and 6. Excluding 6 their sum is 6 which is equal to n itself. So, it's a Perfect Number.
Input: n = 10
Output: false
Explanation: Factors of 10 are 1, 2, 5 and 10. Excluding 10 their sum is 8 which is not equal to n itself. So, it's not a Perfect Number.
Input: n = 15
Output: false
Explanation: Factors of 15 are 1, 3, 5, 15. Excluding 15 their sum is 9 which is not equal to n itself. So, it's not a Perfect Number.
*/

class Solution {
    isPerfect(n) {
        // code here
        let sum = 0;
        for(let i = 1; i<n; i++){
            if(n % i == 0){
                sum = sum + i;
            }
        }
        if(sum == n){
            return true;
        }
        else{
            return false;
        }
    }
}