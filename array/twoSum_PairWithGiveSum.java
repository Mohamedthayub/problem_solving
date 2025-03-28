/*

Given an array arr[] of positive integers and another integer target. Determine if there exists two distinct indices such that the sum of there elements is equals to target.

Examples:

Input: arr[] = [1, 4, 45, 6, 10, 8], target = 16
Output: true
Explanation: arr[3] + arr[4] = 6 + 10 = 16.
Input: arr[] = [1, 2, 4, 3, 6], target = 11
Output: false
Explanation: None of the pair makes a sum of 11.
Input: arr[] = [11], target = 11
Output: false
Explanation: No pair is possible as only one element is present in arr[].

*/
// i have solved this with two pointer approach  


class Solution {
    boolean twoSum(int arr[], int target) {
         // code here
        Arrays.sort(arr);
        int i = 0;
        int j = arr.length - 1;
        while(i < j){
            if(arr[i] + arr[j] == target){
                return true;
            }
            else if (arr[i] + arr[j] > target){
                j = j - 1;
            }
            else{
                i = i + 1;
            }
        }
        return false;
    }
};