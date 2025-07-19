function findThePair(arr,target){
    let pairs = [];
    for(let i = 0; i<arr.length-1; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] + arr[i] == target){
                pairs.push([arr[i],arr[j]]);
            }
        }
    }
    return (pairs.length != 0) ? pairs : [];
}
console.log(findThePair([1, 5, 7, -1, 5],6));