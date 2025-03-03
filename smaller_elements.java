/*
Given an unsorted array arr. Find the count of elements less than or equal to the given element x.

Examples:

Input: x = 9, arr = [10, 1, 2, 8, 4, 5] 
Output: 5
Explanation: The 5 elements are 1, 2, 8, 4 and 5.
Input: x = 2, arr = [1, 2, 2, 5, 7, 2, 9] 
Output: 4 
Explanation: The 4 elements are 1, 2, 2 and 2.

*/
class Solution {
    public int countOfElements(int x, List<Integer> arr) {
        // Code here
        int count = 0;
        for(int i = 0 ; i<arr.size(); i++){
            if(arr.get(i) <= x){
                count = count + 1;
            }
        }
        return count ;
    }
}
