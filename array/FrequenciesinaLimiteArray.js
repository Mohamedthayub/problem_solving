

class Solution {
    // Function to count the frequency of all elements from 1 to N in the array.
    frequencyCount(arr) {
        // code here
        let counts = [];
        for(let i = 0; i<arr.length; i++){
            let counter = 0;
            for(let j = 0; j<arr.length; j++){
                if(i+1 == arr[j]){
                    counter++;
                }
            }
            counts.push(counter);
        }
        return counts;
    }
}

let arr = [2, 3, 2, 3, 5];
let n = arr.length;
let result = new Array(n).fill(0);

for (let i = 0; i < n; i++) {
    let num = arr[i];
    if (num >= 1 && num <= n) {
        result[num - 1]++;
    }
}

return result;
/*
You are given an array arr[] containing positive integers. The elements in the array arr[] range from 1 to n (where n is the size of the array), and some numbers may be repeated or absent. Your task is to count the frequency of all numbers in the range 1 to n and return an array of size n such that result[i] represents the frequency of the number i (1-based indexing).

Examples

Input: arr[] = [2, 3, 2, 3, 5]
Output: [0, 2, 2, 0, 1]
Explanation: We have: 1 occurring 0 times, 2 occurring 2 times, 3 occurring 2 times, 4 occurring 0 times, and 5 occurring 1 time.
Input: arr[] = [3, 3, 3, 3]
Output: [0, 0, 4, 0]
Explanation: We have: 1 occurring 0 times, 2 occurring 0 times, 3 occurring 4 times, and 4 occurring 0 times.
Input: arr[] = [1]
Output: [1]
Explanation: We have: 1 occurring 1 time, and there are no other numbers between 1 and the size of the array.


*/