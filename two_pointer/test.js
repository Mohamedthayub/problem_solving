function targetSum(arr,x){
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] + arr[j] == x){
                return true;
            }
        }
    }
    return false;
}
console.log(targetSum([1,23,3,4,5],5));