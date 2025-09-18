function findTheLeader(arr){
    let leader = [];
    let max = 0;
    for(let i = arr.length - 1; i>=0; i--){
        if(arr[i] >= max){
            max = arr[i];
            leader.unshift(max);
        }
    }
    return leader;
}
console.log(findTheLeader( [5,10,20,40]));