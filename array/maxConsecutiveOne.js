let arr = [1,1,0,0,1,0,1,0,1,1,1,1];
let temp = [];

let count = 0;
for(let i = 0; i<arr.length; i++){
    if(arr[i] == 1){
        count++;
    }
    else{
        if(count){
            temp.push(count);
            count = 0;
        }
    }

}

console.log(temp);
/*
Given a array arr[] consisting of only 0’s and 1’s, return count of a maximum number of consecutive 1’s or 0’s present in the array. 

Examples:

Input: arr[] = [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]
Output: 4
Explanation: The maximum number of consecutive 1’s in the array is 4 from index 8-11.
Input: arr[] = [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
Output: 2
Explanation: The maximum number of consecutive 0’s in the array is 2 from index 0-1.
Input: arr[] = [0, 0, 0, 0]
Output: 4
Explanation: The maximum number of consecutive 0’s in the array is 4.

*/