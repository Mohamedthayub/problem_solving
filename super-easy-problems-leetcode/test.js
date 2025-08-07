let nums = [2,5];
nums.sort();
for(let i = 0; i<nums.length; i++){
    if(i % 2 != 0){
        let temp = nums[i];
        nums[i] = nums[i-1];
        nums[i-1] = temp; 
    }
}
console.log(nums);