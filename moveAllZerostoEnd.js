/*
You are given an array arr[] of non-negative integers. Your task is to move all the zeros in the array to the right end while maintaining the relative order of the non-zero elements. The operation must be performed in place, meaning you should not use extra space for another array.

Examples:

Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
Output: [1, 2, 4, 3, 5, 0, 0, 0]
Explanation: There are three 0s that are moved to the end.
Input: arr[] = [10, 20, 30]
Output: [10, 20, 30]
Explanation: No change in array as there are no 0s.
Input: arr[] = [0, 0]
Output: [0, 0]
Explanation: No change in array as there are all 0s.

*/
class Solution {
    pushZerosToEnd(arr) {
        // code here
        let zero = 0;
        let temp = [];
        for(let i = 0; i<arr.length; i++){
            if(arr[i] != 0){
                temp.push(arr[i]);
            }
        }
        for(let j = 0; j<arr.length; j++){
            arr[j] = temp[j];
        }
        for(let k = temp.length; k<arr.length; k++){
            arr[k] = zero;
        }
        
    }
    
}

class Solution {
    pushZerosToEnd(arr) {
        // code here
        let temp = [];
        for(let i = 0; i<arr.length; i++){
            if(arr[i] != 0){
                temp.push(arr[i])
            }
        }
        for(let t = 0; t<arr.length; t++){
            if(arr[t] == 0){
                temp.push(arr[t]);
            }
        }
        for(let j = 0; j<temp.length; j++){
            arr[j]  = temp[j];
        }
    }
    
}