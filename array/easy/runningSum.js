
function runningSum(arr){
    let sum = 0; 
    for(let i = 0; i<arr.length; i++){
        sum =  sum + arr[i];
        arr[i] = sum;
    }
    return arr;
}
console.log(runningSum([1,2,3,4,5]));
/*

Input: nums = [1, 2, 3, 4]
Output: [1, 3, 6, 10]
Explanation:

runningSum[0] = 1

runningSum[1] = 1 + 2 = 3

runningSum[2] = 1 + 2 + 3 = 6

runningSum[3] = 1 + 2 + 3 + 4 = 10


*/