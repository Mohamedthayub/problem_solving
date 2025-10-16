class Solution {
    twoSum(arr, target) {
        // code here
        arr.sort((a,b) => a - b);
        let left = 0;
        let right = arr.length - 1;
        while(left <  right){
            let result = arr[left] + arr[right];
            if(result == target){
                return true;
            }
            else if (result < target){
                left++;
            }
            else{
                right--;
            }
        }
        
        return false;
    }
}
/*

Given an array arr[] of integers and another integer target. Determine if there exist two distinct indices such that the sum of their elements is equal to the target.

Examples:

Input: arr[] = [0, -1, 2, -3, 1], target = -2
Output: true
Explanation: arr[3] + arr[4] = -3 + 1 = -2
Input: arr[] = [1, -2, 1, 0, 5], target = 0
Output: false
Explanation: None of the pair makes a sum of 0
Input: arr[] = [11], target = 11
Output: false


*/