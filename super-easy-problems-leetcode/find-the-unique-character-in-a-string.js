var firstUniqChar = function(s) {
    let map = new Map();
    for(let i = 0; i<s.length; i++){
        if(!map.has(s[i])){
            map.set(s[i], 1);
        }
        else{
            map.set(s[i], map.get(s[i]) + 1);
        }
    }
    for(let [key ,value] of map){
        if(value == 1){
            return s.indexOf(key);
        }
    }
    return -1;
    
};


/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"

Output: 0

Explanation:

The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:

Input: s = "loveleetcode"

Output: 2

Example 3:

Input: s = "aabb"

Output: -1


*/