class Solution {
    checkEqual(a, b) {
        // code here
        let sum1 = 0;
        let sum2 = 0;
        for(let i = 0; i<a.length; i++){
            sum1 = sum1 + a[i];
        }
        for(let j = 0; j<b.length; j++){
            sum2 = sum2  + b[j];
        }
        if(sum1 == sum2){
            return true;
        }
        else{
            return false;
        }
    }
}
class Solution {
    checkEqual(a, b) {
        // code here
        if(a.length != b.length){
            return false;
        }
        a.sort((a,b) => a -b);
        b.sort((a,b) => a - b);
        for(let i = 0; i<a.length; i++){
            if(a[i] != b[i]){
                return false;
            }
        } 
        return true;
    }
    
}


/*
Given two arrays a[] and b[] of equal size, the task is to find whether the elements in the arrays are equal.
Two arrays are said to be equal if both contain the same set of elements, arrangements (or permutations) of elements may be different though.
Note: If there are repetitions, then counts of repeated elements must also be the same for two arrays to be equal.

Examples:

Input: a[] = [1, 2, 5, 4, 0], b[] = [2, 4, 5, 0, 1]
Output: true
Explanation: Both the array can be rearranged to [0,1,2,4,5]
Input: a[] = [1, 2, 5], b[] = [2, 4, 15]
Output: false
Explanation: a[] and b[] have only one common value.
*/