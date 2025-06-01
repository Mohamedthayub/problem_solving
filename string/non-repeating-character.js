


class Solution {
    nonRepeatingChar(s) {
        // code here
        let str = new Map();
        for(let i = 0; i<s.length; i++){
            if(str[s[i]] == undefined){
                str[s[i]] = 1;
            }
            else{
                 str[s[i]]++;
            }
        }
        for(let key in str){
            if(str[key] == 1){
                return key;
            }
        }
        return -1;
        
    }
}

/*
Given a string s consisting of lowercase English Letters. Return the first non-repeating character in s.
If there is no non-repeating character, return '$'.
Note: When you return '$' driver code will output -1.

Examples:

Input: s = "geeksforgeeks"
Output: 'f'
Explanation: In the given string, 'f' is the first character in the string which does not repeat.
Input: s = "racecar"
Output: 'e'
Explanation: In the given string, 'e' is the only character in the string which does not repeat.
Input: s = "aabbccc"
Output: -1
Explanation: All the characters in the given string are repeating.

*/