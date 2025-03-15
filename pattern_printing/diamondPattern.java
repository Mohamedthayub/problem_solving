class Solution {

    void printDiamond(int n) {
        // Your code here
        for(int i = 1; i<=n; i++){
            for(int j = 1; j<=n - i; j++){
                System.out.print(" ");
            }
            for(int k = 1; k<=i; k++){
                System.out.print("* ");
            }
            System.out.println();
        }
        for(int i = 0; i<n;  i++){
            for(int j = 1; j<=i; j++){
                System.out.print(" ");
            }
            for(int k = 1; k<=n - i; k++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}


/*
Geek is very fond of patterns. Once, his teacher gave him a star pattern to solve. He gave Geek an integer n and asked him to build a pattern.

Help Geek to build a star pattern.

Example 1:
 *
* * 
* * 
 *

Example 2:
  *
 * *
* * *
* * *
 * *
  *


*/

// this is geekforgeeks problem 