class Solution {

    // function to count all pairs
    // from both the sorted arrays
    // whose sum is equal to a given
    // value
    static int countPairs(int arr1[], int arr2[], int x) {
        // code here.
        int count = 0;
        for(int i = 0; i<arr1.length; i++){
            for(int j = 0; j<arr2.length; j++){
                if(arr1[i] + arr2[j] == x){
                    count = count + 1;
                }
            }
        }
        return count;
    }
}
/*
Given two sorted arrays arr1 and arr2 of distinct elements. Given a value x. The problem is to count all pairs from both arrays whose sum equals x.
Note: The pair has an element from each array.

Examples:

Input: x = 10, arr1[] = [1, 3, 5, 7], arr2[] = [2, 3, 5, 8] 
Output: 2
Explanation: The pairs are: (5, 5) and (7, 3).  
Input: x = 5, arr1[] = [1, 2, 3, 4], arr2[] = [5, 6, 7, 8]
Output: 0
Explanation: There are no valid pairs.

*/