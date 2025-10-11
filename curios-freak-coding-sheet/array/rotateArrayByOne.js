
function rotateArray(arr){
    let last = arr[arr.length - 1];
    for(let i = arr.length - 1; i> 0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = last;
    return arr;
}
console.log(rotateArray([1,2,3,4,5]));
// creating a new Array 
function rotateArray(arr){
    let temp = [];
    let last = arr[arr.length-1];
    for(let i = 0; i<arr.length-1; i++){
        temp.push(arr[i])
    }
    temp.unshift(last);
    return temp;
}
console.log(rotateArray([1,2,3,4,5]));

/*
Given an array arr, rotate the array by one position in clockwise direction.

Examples:

Input: arr[] = [1, 2, 3, 4, 5]
Output: [5, 1, 2, 3, 4]
Explanation: If we rotate arr by one position in clockwise 5 come to the front and remaining those are shifted to the end.
Input: arr[] = [9, 8, 7, 6, 4, 2, 1, 3]
Output: [3, 9, 8, 7, 6, 4, 2, 1]
Explanation: After rotating clock-wise 3 comes in first position.

*/