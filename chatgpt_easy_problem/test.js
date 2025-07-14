function findThePairs(arr,target){
    let pairs  = [];
    for(let i = 0; i<arr.length-1; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] + arr[j] == target){
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}
console.log(findThePairs([1,1,1,1],2))