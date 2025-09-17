
var moveZeroes = function(nums) {
    let write = 0;
    for(let reader = 0; reader<nums.length; reader++){
        if(nums[reader] != 0){
            nums[write]  = nums[reader];
            write++;
        }
    }
    while(write < nums.length){
        nums[write] = 0;
        write++;
    }
    return nums;
};
/*

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

*/