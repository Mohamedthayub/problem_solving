class Solution {
    // Function to find element with more appearances between two elements in an
    // array.
    majorityWins(arr, n, x, y) {
        // code here
        let countx = 0;
        let county = 0;
        for(let i = 0; i<n; i++){
            if(arr[i] == x){
                countx++;
            }
            else if (arr[i] == y){
                county++;
            }            
        }
        if(countx > county){
            return x;
        }
        else if(countx == county){
            return Math.min(x,y);

        }
        else{
            return y 
        }
        
    }
}
/*

Given an array arr[] of size N and two elements x and y, use counter variables to find which element appears most in the array. If both elements have the same frequency, then return the smaller element.
Note:  We need to return the element, not its count.

 

Example 1:

Input:
N = 11
arr[] = {1,1,2,2,3,3,4,4,4,4,5}
x = 4, y = 5
Output: 4
Explanation: 
frequency of 4 is 4.
frequency of 5 is 1.
 

Example 2:

Input:
N = 8
arr[] = {1,2,3,4,5,6,7,8}
x = 1, y = 7
Output: 1
Explanation: 
frequency of 1 is 1.
frequency of 7 is 1.
Since 1 < 7, return 1.
*/