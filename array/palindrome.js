

class Solution {
    isPalindrome(n) {
        // code here
        n = n.toString();
        let temp = "";
        let str = n;
        for(let i = 1; i<=n.length; i++){
            temp =  temp + n[n.length - i];
        }
        if(temp == str){
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