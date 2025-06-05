
class Solution {
    // Function to check if a given string is a palindrome.
    isPalindrome(s) {
        // code here
        let temp = s;
        let str = "";
        for(let i = 1; i<=s.length; i++){
            str = str + s[s.length - i];
        }
        if(str == temp){
            return true;
        }
        else{
            return false;
        }
    }
}
function checkPalidrome(str){
    let start = 0;
    let end = str.length - 1;
    while(start <= end){
        if(str[start] != str[end]){
            return "Not Palidrome";
        }
        start++;
        end--;
    }
    return "Palidrome";
}

/*
You are given a string s. Your task is to determine if the string is a palindrome. A string is considered a palindrome if it reads the same forwards and backwards.

Examples :

Input: s = "abba"
Output: true
Explanation: "abba" reads the same forwards and backwards, so it is a palindrome.
Input: s = "abc" 
Output: false
Explanation: "abc" does not read the same forwards and backwards, so it is not a palindrome.
Input: s = "a"
Output: true
Explanation: A single-character string is always a palindrome.
Input: s = "acbca"
Output: true
Explanation: "acbca" reads the same forwards and backwards, so it is a palindrome.
*/