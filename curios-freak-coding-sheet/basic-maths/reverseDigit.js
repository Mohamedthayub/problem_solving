

class Solution {
    reverseDigits(n) {
        // code here
        let reverseNum = 0;
        while(n > 0){
            let lastdigit = n % 10;
            if(lastdigit == 0){
                n = Math.floor(n / 10);
                continue;
            }
            reverseNum = (reverseNum * 10) + lastdigit;
            n = Math.floor(n / 10);
        }
        return reverseNum;
    }
}


class Solution {
    reverseDigits(n) {
        // code here
        let str = n.toString();
        let temp = "";
        for(let i = str.length - 1; i>=0; i--){
            if(str[i] == "0"){
                continue;
            }
            else{
                temp = temp + str[i];
            }
        }
        return Number(temp);
    }
}

/*
You are given an integer n. Your task is to reverse the digits, ensuring that the reversed number has no leading zeroes.

Examples:

Input: n = 122
Output: 221
Explanation: By reversing the digits of number, number will change into 221.
Input : n = 200
Output: 2
Explanation: By reversing the digits of number, number will change into 2.
Input : n = 12345 
Output: 54321
Explanation: By reversing the digits of number, number will change into 54321.


*/