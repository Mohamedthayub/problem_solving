
class Solution {
    removeDups(s) {
        // code here
        let set = new Set(s);
        s = Array.from(set);
        let str = "";
        for(let i = 0; i<s.length; i++){
            str += s[i];
        }
        return str;
    }
}


/*
Given a string s without spaces, the task is to remove all duplicate characters from it, keeping only the first occurrence.

Note: The original order of characters must be kept the same. 

Examples :

Input: s = "zvvo"
Output: "zvo"
Explanation: Only keep the first occurrence
Input: s = "gfg"
Output: "gf"
Explanation: Only keep the first occurrence


*/
