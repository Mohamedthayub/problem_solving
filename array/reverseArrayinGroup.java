/*
Given an array arr of positive integers. Reverse every sub-array group of size k.

Note: If at any instance, k is greater or equal to the array size, then reverse the entire array. You shouldn't return any array, modify the given array in place.

Examples:

Input: arr[] = [1, 2, 3, 4, 5], k = 3
Output: [3, 2, 1, 5, 4]
Explanation: First group consists of elements 1, 2, 3. Second group consists of 4,5.
Input: arr[] = [5, 6, 8, 9], k = 5
Output: [9, 8, 6, 5]
Explnation: Since k is greater than array size, the entire array is reversed.


*/


class Solution {
    /**
    * @param number[] arr
    * @param number k

    * @returns none
    */
    reverseInGroups(arr, k) {
        let n = arr.length;

        // Loop through the array in steps of k
        for (let i = 0; i < n; i += k) {
            let left = i;
            let right = Math.min(i + k - 1, n - 1); // Ensure right does not exceed array bounds

            // Reverse the sub-array from left to right
            while (left < right) {
                [arr[left], arr[right]] = [arr[right], arr[left]]; // Swap
                left++;
                right--;
            }
        }
        
    }
}