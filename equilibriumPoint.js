// this is optimize code  

class Solution {
    // Function to find equilibrium point in the array.
    findEquilibrium(arr) {
    // code here
    let totalSum = arr.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        totalSum -= arr[i]; 

        if (leftSum === totalSum) {
            return i;
        }

        leftSum += arr[i];
    }

    return -1;
    }
}

/*
function check(arr){
    for(let i = 0; i<arr.length; i++){
        let leftSum = 0;
        let rightSum = 0;
        for(let j = 0; j<i; j++){
            leftSum = leftSum + arr[j];
        }
        for(let k = i+1; k<arr.length; k++){
            rightSum = rightSum + arr[k];
        }
        if(leftSum == rightSum){
            return i;
        }

    }
    return -1;
}
console.log(check([1,2,0,3])); first i found this solution .then i optimize the code  
*/


/*

Given an array of integers arr[], the task is to find the first equilibrium point in the array.

The equilibrium point in an array is an index (0-based indexing) such that the sum of all elements before that index is the same as the sum of elements after it. Return -1 if no such point exists. 

Examples:

Input: arr[] = [1, 2, 0, 3]
Output: 2 
Explanation: The sum of left of index 2 is 1 + 2 = 3 and sum on right of index 2 is 3.
Input: arr[] = [1, 1, 1, 1]
Output: -1
Explanation: There is no equilibrium index in the array.
Input: arr[] = [-7, 1, 5, 2, -4, 3, 0]
Output: 3
Explanation: The sum of left of index 3 is -7 + 1 + 5 = -1 and sum on right of index 3 is -4 + 3 + 0 = -1.
*/