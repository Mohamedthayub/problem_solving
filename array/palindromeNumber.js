


class Solution {
    isPalindrome(n) {
        // code here
         let revnum = 0;
         let temp = n;
         while(n > 0){
             let lastdigit = n % 10;
             n = Math.floor(n / 10);
             revnum = (revnum * 10) + lastdigit;
         }
         if(temp == revnum){
             return true;
         }
         else{
             return false;
         }
    }
}

/*
You are given an integer n. Your task is to determine whether it is a palindrome.

A number is considered a palindrome if it reads the same backward as forward, like the string examples "MADAM" or "MOM".

Examples:

Input: n = 555
Output: true
Explanation: The number 555 reads the same backward as forward, so it is a palindrome.
Input: n = 123
Output: false
Explanation: The number 123 reads differently backward (321), so it is not a palindrome.
Input: n = 1221
Output: true

*/