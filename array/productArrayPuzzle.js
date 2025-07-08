
class Solution {
    productExceptSelf(arr) {
        // code here
        let left = [];
        left[0] = 1;
        for(let i = 0; i<arr.length - 1; i++){
            left[i+1] = left[i] * arr[i];
        }
        let right = [];
        right[arr.length - 1] = 1;
        for(let j = arr.length -1; j>0; j--){
            right[j - 1] = right[j] * arr[j];
        }
        for(let k = 0; k<arr.length; k++){
            arr[k] = left[k] * right[k];
        }
        return arr;
    }
    
}
// i have solved this with prefix and suffix product algorithm


/*

Given an array, arr[] construct a product array, res[] where each element in res[i] is the product of all elements in arr[] except arr[i]. Return this resultant array, res[].
Note: Each element is res[] lies inside the 32-bit integer range.

Examples:

Input: arr[] = [10, 3, 5, 6, 2]
Output: [180, 600, 360, 300, 900]
Explanation: For i=0, res[i] = 3 * 5 * 6 * 2 is 180.
For i = 1, res[i] = 10 * 5 * 6 * 2 is 600.
For i = 2, res[i] = 10 * 3 * 6 * 2 is 360.
For i = 3, res[i] = 10 * 3 * 5 * 2 is 300.
For i = 4, res[i] = 10 * 3 * 5 * 6 is 900.
Input: arr[] = [12, 0]
Output: [0, 12]
Explanation: For i = 0, res[i] is 0.
For i = 1, res[i] is 12.
*/