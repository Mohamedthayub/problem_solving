
class Solution {
    findUnion(a, b) {
        // code here
        let union = [];
        let map = new Map();
        for(let i = 0; i<a.length; i++){
            if(!map.has(a[i])){
                map.set(a[i],1);
            }
        }
        for(let j = 0; j<b.length; j++){
            if(!map.has(b[j])){
                map.set(b[j],1);
            }
        }
        for(let [key,value] of map){
            union.push(key);
        }
       let afterSort =  union.sort((a,b) => a-b);
       return afterSort;
    }
}

/*
Given two sorted arrays a[] and b[], where each array may contain duplicate elements , the task is to return the elements in the union of the two arrays in sorted order.
Union of two arrays can be defined as the set containing distinct common elements that are present in either of the arrays.

Examples:

Input: a[] = [1, 2, 3, 4, 5], b[] = [1, 2, 3, 6, 7]
Output: [1, 2, 3, 4, 5, 6, 7]
Explanation: Distinct elements including both the arrays are: 1 2 3 4 5 6 7.
Input: a[] = [2, 2, 3, 4, 5], b[] = [1, 1, 2, 3, 4]
Output: [1, 2, 3, 4, 5]
Explanation: Distinct elements including both the arrays are: 1 2 3 4 5.
Input: a[] = [1, 1, 1, 1, 1], b[] = [2, 2, 2, 2, 2]
Output: [1, 2]
Explanation: Distinct elements including both the arrays are: 1 2.

*/