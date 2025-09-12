function twoSum(arr,target){
    if(arr.length === 0){
        return -1;
    }
    let map = new Map();
    for(let i = 0; i<arr.length; i++){
        let compliment = target - arr[i];
        if(map.has(compliment)){
            return [map.get(compliment) ,i];
        }
        map.set(arr[i],i);
    }
    return -1;
}
console.log(twoSum([1,2,3,4,5],7));

