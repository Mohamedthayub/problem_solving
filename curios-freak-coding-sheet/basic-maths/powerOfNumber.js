/*

Given a number n, find the value of n raised to the power of its own reverse.
Note: The result will always fit into a 32-bit signed integer.

Examples:

Input: n = 2
Output: 4
Explanation: The reverse of 2 is 2, and 22 = 4.
Input: n = 10
Output: 10
Explanation: The reverse of 10 is 1 (leading zero is discarded), and 10 raised to the power 1 is 10.

*/
class Solution {
    ReverseExponentiation(n) {
        // code here
        let str = n.toString().split("").reverse().join("");
        let num2 = Number(str); // converts "021" -> 21 automatically

        // Compute result
        return n ** num2;
    }
}

class Solution {
    ReverseExponentiation(n) {
        // code here
        let temp = n; 
        let reverseNum =  0;
        while(n > 0){
            let lastdigit = n % 10;
            reverseNum = (reverseNum * 10) + lastdigit;
            n = Math.floor(n / 10);
        }
        let result = temp ** reverseNum;
        return result;
    }
}