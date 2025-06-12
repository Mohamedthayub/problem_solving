class Solution {
    // Function to return the count of number of elements in the union of two arrays.
    findUnion(a, b) {
        // code here
       
        for(let j = 0; j<b.length; j++){
            a.push(b[j]);
        }
        let set = new Set(a);
        let arr = Array.from(set);
        return arr.length;
    }
}

class Solution {
    findUnion(a, b) {
        // code here
        let map = new Map();
        let temp = [];
        a.forEach((item) => {
            if(!map.has(item)){
                map.set(item,1);
            }
            else{
                map.set(item, map.get(item) + 1);
            }
        })
        b.forEach((item2) => {
            if(!map.has(item2)){
                map.set(item2,1);
            }
        })
        for(let arr of map.keys()){
            temp.push(arr);
        }
        return temp.length;
        
    }
}


/*
Given two arrays a[] and b[], the task is to find the number of elements in the union between these two arrays.

The Union of the two arrays can be defined as the set containing distinct elements from both arrays. If there are repetitions, then only one element occurrence should be there in the union.

Note: Elements of a[] and b[] are not necessarily distinct.

Examples

Input: a[] = [1, 2, 3, 4, 5], b[] = [1, 2, 3]
Output: 5
Explanation: Union set of both the arrays will be 1, 2, 3, 4 and 5. So count is 5.
Input: a[] = [85, 25, 1, 32, 54, 6], b[] = [85, 2] 
Output: 7
Explanation: Union set of both the arrays will be 85, 25, 1, 32, 54, 6, and 2. So count is 7.
*/