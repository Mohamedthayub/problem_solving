function moveZeroToend(nums){
    let nonZero = [];
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] != 0){
            nonZero.push(nums[i]);
        }
    }    

    for(let j = nonZero.length; j < nums.length; j++){
        nonZero.push(0);
    }
    for(let t = 0; t < nonZero.length; t++){
        nums[t] = nonZero[t];
    }

    return nums;
}



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