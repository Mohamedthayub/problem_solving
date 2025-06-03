function LeftRotateOneplaces(arr){
    let first = arr[0];
    for(let i = 1; i<arr.length; i++){
        arr[i-1] = arr[i];
    }
    arr[arr.length - 1 ] = first;
}
console.log(LeftRotateOneplaces([1,2,3,4,5]));
 
// Note : here we take first element put it last of the array 
 
/*

Example 1:
Input: N = 5, array[] = {1,2,3,4,5}
Output: 2,3,4,5,1
Explanation: 
Since all the elements in array will be shifted 
toward left by one so ‘2’ will now become the 
first index and and ‘1’ which was present at 
first index will be shifted at last.


Example 2:
Input: N = 1, array[] = {3}
Output: 3
Explanation: Here only element is present and so 
the element at first index will be shifted to 
last index which is also by the way the first index.


*/