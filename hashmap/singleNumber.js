
class Solution {
    getSingle(arr) {
        // code here
       let map = new Map();
       arr.forEach((item) => {
        if(!map.has(item)){
            map.set(item , 1);
        }
        else{
            map.set(item , map.get(item) + 1);
        }
       })
       for(let [key ,value] of map){
        if(value % 2 == 1){
            return key;
        }
       }
       return -1;
    }
}

/*
Given an array arr[] of positive integers where every element appears even times except for one. Find that number occurring an odd number of times.

Examples:

Input: arr[] = [1, 1, 2, 2, 2]
Output: 2
Explanation: In the given array all element appear two times except 2 which appears thrice.
Input: arr[] = [8, 8, 7, 7, 6, 6, 1]
Output: 1
Explanation: In the given array all element appear two times except 1 which appears once.



*/