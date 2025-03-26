

class Solution {
    convertFive(num) {
        // code here
        let arr = num.toString().split("").map(Number);
        for(let i = 0; i<arr.length; i++){
            if(arr[i] == 0){
                arr[i] = 5;
            }
        }
        num = Number(arr.join(""));
        return num;
    }
}

/*
You are given an integer n. You need to convert all zeroes of n to 5.

Examples:

Input: n = 1004
Output: 1554
Explanation: There are two zeroes in 1004 on replacing all zeroes with 5, the new number will be 1554.
Input: n = 121
Output: 121
Explanation: Since there are no zeroes in 121, the number remains as 121.

*/