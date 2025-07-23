var majorityElement = function(nums) {
    let map = new Map();
    let majority = [];
    let n = Math.floor(nums.length / 3);
    for(let i = 0; i<nums.length ; i++){
        if(!map.has(nums[i])){
            map.set(nums[i],1);
        }
        else{
            map.set(nums[i],map.get(nums[i]) + 1);
        }
    }
    for(let [key,value] of map){
        if(value > n){
            majority.push(key);
        }
    }
    return majority.length < 1 ? [] : majority;
};

/*

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

Example 1:

Input: nums = [3,2,3]
Output: [3]
Example 2:

Input: nums = [1]
Output: [1]
Example 3:

Input: nums = [1,2]
Output: [1,2]

*/