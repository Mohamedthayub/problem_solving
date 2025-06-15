
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

function removeDuplicates(s) {
    const seen = new Set(); // acts like a HashSet
    let result = '';

    for (let char of s) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char; // keep first occurrence
        }
    }

    return result;
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
