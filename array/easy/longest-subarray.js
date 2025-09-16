function longestSubarray(arr,k){
    let max = [];
    for(let i = 0; i<arr.length; i++){
        let sum = 0; 
        let length = 0;
        for(let j = i; j<arr.length; j++){
            sum = sum + arr[j];
            length++;
            if(sum == k){
              max.push(length);
            }
        }
    }
    if(max.length != 0){
        return Math.max(...max);
    }
    else{
        return 0;
    }
}
console.log(longestSubarray([2,1,3,4],10));