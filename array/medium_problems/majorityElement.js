var majorityElement = function(nums) {
    let n = Math.floor(nums.length / 2);
    let map = new Map();
    nums.forEach((item) => {
        if(!map.has(item)){
            map.set(item,1);
        }
        else{
            map.set(item, map.get(item) + 1);
        }
    })
    for(let [key,value] of map){
        if(value > n){
            return key;
        }
    }
    return -1;
};


/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2


*/