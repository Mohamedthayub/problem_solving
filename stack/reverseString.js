
class Solution {
    reverse(s) {
        // code here
        let reverse = [];
        for(let char of s){
            reverse.push(char);
        }
        let reverseStr = "";
        while(reverse.length > 0){
            reverseStr += reverse.pop();
        }
        return reverseStr;
    }
}

/*
You are given a string s , the task is to reverse the string using stack.

Examples:

Input: s ="GeeksforGeeks"
Output:  skeeGrofskeeG
Input: s ="Geek"
Output: keeG

*/