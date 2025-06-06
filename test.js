let nums  = [3,2,4];
// output = [1,2];
let target  = 6;
for(let i = 0; i<nums.length; i++){
    for(let j = i+1; j<nums.length; j++){
        if(nums[i] + nums[j] == target){
            console.log(i,j);
        }
    }
}