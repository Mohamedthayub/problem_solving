

// User function Template for javascript
class Solution {
    rotate(arr) {
        // code here
        var temp = arr[arr.length - 1];
        var temparr = [];
        for(var i = 0; i<arr.length -1  ; i++){
            temparr[i+1] = arr[i]; 
        }
        temparr[0] = temp;
        for(var i = 0; i<temparr.length; i++){
            arr[i] = temparr[i];
        }
        return arr;
    }
}
/*
Given an array arr, rotate the array by one position in clockwise direction.

Examples:

Input: arr[] = [1, 2, 3, 4, 5]
Output: [5, 1, 2, 3, 4]
Explanation: If we rotate arr by one position in clockwise 5 come to the front and remaining those are shifted to the end.
Input: arr[] = [9, 8, 7, 6, 4, 2, 1, 3]
Output: [3, 9, 8, 7, 6, 4, 2, 1]
Explanation: After rotating clock-wise 3 comes in first position.
*/