
class Solution {
    factorial(n) {
        // code here
        let factorial = 1;
        for(let i = 1; i<=n; i++){
            factorial *=  i;
        }
        return factorial;
        
    }
}

/*
Given a positive integer, n. Find the factorial of n.

Examples :

Input: n = 5
Output: 120
Explanation: 1 x 2 x 3 x 4 x 5 = 120
Input: n = 4
Output: 24
Explanation: 1 x 2 x 3 x 4 = 24


*/