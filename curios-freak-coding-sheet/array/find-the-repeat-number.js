function findTheRepeat(arr){
    arr.sort((a,b) => a - b);
    for(let i = 0; i<arr.length- 1; i++){
        if(arr[i] == arr[i+1]){
            return arr[i];
        }
    }
    return -1;
}
console.log(findTheRepeat([1,1,2,3,4,5]));


/*
🧩 Problem Statement: Find the Repeated Number in an Array

You are given an array of integers that may contain duplicate values.
Your task is to find and return the first repeated number in the array.
If there are no repeated numbers, return -1.
🔹 Example 1
Input:
arr = [1, 3, 4, 5, 5, 2, 7]
Output:
5
Explanation:
The number 5 appears more than once in the array, so it is the repeated number.

🔹 Example 2
Input:
arr = [1, 2, 3, 4, 5]
*/