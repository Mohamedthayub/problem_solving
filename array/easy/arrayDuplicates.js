class Solution {
    findDuplicates(arr) {
    let freq = {};  
    let result = [];

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    for (let key in freq) {
        if (freq[key] > 1) {
            result.push(Number(key));
        }
    }

    return result;
    }
}

/*
Given an array arr of integers, find all the elements that occur more than once in the array. If no element repeats, return an empty array.

Examples:

Input: arr[] = [2, 3, 1, 2, 3]
Output: [2, 3] 
Explanation: 2 and 3 occur more than once in the given array.
Input: arr[] = [0, 3, 1, 2] 
Output: [] 
Explanation: There is no repeating element in the array, so the output is empty.
Input: arr[] = [2]
Output: [] 
Explanation: There is single element in the array. Therefore output is empty.


*/
/*
let temp = [];
let arr = [2,3,1,2,3];
for(let i = 0; i<arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
        if(arr[i] == arr[j]){
            temp.push(arr[i]);
        }
    }
}
if(temp){
    console.log(temp);
}
else{
    console.log([]);
}
*/