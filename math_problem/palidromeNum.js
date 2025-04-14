

var isPalindrome = function(x) {
    var temp  = x;
    var revnum = 0;
    while(x > 0){
        var lastdigit = x % 10;
        revnum = (revnum * 10) + lastdigit;
        x = Math.floor(x / 10);
    }
    if(temp == revnum){
        return true;
    }
    else{
        return false;
    }
};
function checkPalidrome(num){
    let str = num.toString();
    let first = 0;
    let last = str.length - 1;
    let result ;
    while(first < last){
        if(str[first] != str[last]){
            result = "Not Palidrome";
        }
        first++;
        last--
    }
    if(!result){
        return "Palidrome";
    }
    else{
        return "Not Palidrome";
    }
}

/*
Given an integer x, return true if x is a palindrome, and false otherwise. 
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


*/