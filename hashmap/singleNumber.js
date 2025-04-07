
class Solution {
    getSingle(arr) {
        // code here
        let obj = {};
        arr.forEach(num => {
            if(obj[num] == undefined){
                obj[num] = 1;
            }
            else{
                obj[num]++;
            }
        })
        for(let key in obj){
            if(obj[key] % 2 != 0){
                return key;
            }
        }
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