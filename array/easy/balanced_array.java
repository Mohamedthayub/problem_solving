public class main{
    public static void main(String[] args){
        int sum =  0; 
        int sum2 = 0;
        int[] arr = {1,5,3,2};
        for(int i = 0; i<arr.length / 2; i++){
            sum = sum + arr[i];
        }
        for(int j = arr.length / 2; j<arr.length; j++){
            sum2 = sum2 + arr[j];
        }
        int res;
        if(sum > sum2){
             res = sum - sum2;
        }
        else{
            res = sum2 - sum;
        }
        System.out.print(res);
    }
}

/*

Given an array arr of even size, the task is to find a minimum value that can be added to an element so that the array becomes balanced. An array is balanced if the sum of the left half of the array elements is equal to the sum of the right half.

Examples :

Input: arr = [1, 5, 3, 2]
Output: 1
Explanation: Sum of first 2 elements is 1 + 5  = 6, Sum of last 2 elements is 3 + 2  = 5, To make the array balanced you can add 1.
Input: arr = [1, 2, 1, 2, 1, 3]
Output: 2
Explanation: Sum of first 3 elements is 1 + 2 + 1 = 4, Sum of last three elements is 2 + 1 + 3 = 6, To make the array balanced you can add 2.
*/