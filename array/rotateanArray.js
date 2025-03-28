
class Solution {
    leftRotate(arr, d) {
        // code here
        var temp = [];
        for(var i = d; i<arr.length; i++){
            temp.push(arr[i]);
        }
        for(var j = 0; j<d; j++){
            temp.push(arr[j]);
        }
        for(var t = 0; t<temp.length; t++){
            arr[t] = temp[t];
        }
    }
}

/*
Given an array arr[]. The task is to rotate the array by d elements where d ≤ arr.size.

Examples:

Input: arr[] = [-1, -2, -3, 4, 5, 6, 7], d = 2
Output: [-3, 4, 5, 6, 7, -1, -2]
Explanation: 
Rotate by 1: [-2, -3, 4, 5, 6, 7, -1]
Rotate by 2: [-3, 4, 5, 6, 7, -1, -2]
Input: arr[] = [1, 3, 4, 2], d = 3 
Output: [2, 1, 3, 4]
Explanation: After rotating the array three times, the first three elements shift one by one to the right.
*/

