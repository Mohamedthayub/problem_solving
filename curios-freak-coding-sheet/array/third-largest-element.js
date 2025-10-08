
class Solution {

    thirdLargest(arr) {
        // your code here
        if(arr.length < 3){
            return -1;
        }
        let first = -1;
        let second = -1;
        let third = -1;
        for(let num of arr){
            if(num >= first){
                third = second;
                second = first;
                first = num;
            }
            else if(num >= second ){
                third = second;
                second = num;
            }
            else if (num >= third){
                third = num;
            }
        }
        if(third == -Infinity){
            return first;
        }
        return third;
    }
}
/*
Given an array, arr of positive integers. Find the third largest element in it. Return -1 if the third largest element is not found.

Examples:

Input: arr[] = [2, 4, 1, 3, 5]
Output: 3
Explanation: The third largest element in the array [2, 4, 1, 3, 5] is 3.
Input: arr[] = [10, 2]
Output: -1
Explanation: There are less than three elements in the array, so the third largest element cannot be determined.
Input: arr[] = [5, 5, 5]
Output: 5
Explanation: In the array [5, 5, 5], the third largest element can be considered 5, as there are no other distinct elements.

*/