// function  twoSum(nums,target){
//     if(nums.length == 0){
//         return [];
//     }
//     for(let i = 0; i<nums.length - 1; i++){
//         for(let j = i+ 1; j< nums.length; j++){
//             let result = nums[i] + nums[j];
//             if(result == target){
//                 return [i,j];
//             }
//         }
//     }
//     return [];
// }

function  twoSum(nums,target){
    let map = new Map();
    if(nums.length == 0){
        return [];
    }
    for(let i = 0; i<nums.length; i++){
        let check =  target - nums[i];
        if(map.has(check)){
            return [map.get(check),i];
        }

        map.set(nums[i],i);
    }
    return [];
}
console.log(twoSum([2,7,11,15],9));

