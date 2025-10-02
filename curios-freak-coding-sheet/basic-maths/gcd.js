

// this is optimal approach 
class Solution { 
    gcd(a, b) {
        // code here
        while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp; 
       }
    return a;
    }
}

// this  is brute force approach

class Solution {
    gcd(a, b) {
        // code here
        let gcd ;
        for(let i = 1; i<=b; i++){
            if(a % i == 0 && b % i == 0){
                gcd = i
            }
        }
        return gcd;
    }
}


/*
Given two positive integers a and b, find GCD of a and b.

Note: Don't use the inbuilt gcd function

Examples:

Input: a = 20, b = 28
Output: 4
Explanation: GCD of 20 and 28 is 4
Input: a = 60, b = 36
Output: 12
Explanation: GCD of 60 and 36 is 12

*/