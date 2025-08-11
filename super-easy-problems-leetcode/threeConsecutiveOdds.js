
var threeConsecutiveOdds = function(arr) {
    let counts = [];
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] % 2 != 0){
            count++;
        }
        else{
            counts.push(count);
            count = 0;
        }
    }
    counts.push(count);
    return Math.max(...counts) >= 3 ? true : false;
    
};
/*

Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
 

Example 1:

Input: arr = [2,6,4,1]
Output: false
Explanation: There are no three consecutive odds.
Example 2:

Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
Explanation: [5,7,23] are three consecutive odds.
 
*/