function frequency(arr,target){
    let pairs = [];
    let map = new Map();
    for(let i = 0; i<arr.length; i++){
        if(!map.has(arr[i])){
            map.set(arr[i] , 1);
        }
        else{
            map.set(arr[i], map.get(arr[i]) + 1);
        }
    }
    let count = 0 ;
    for(let [key,value] of map){
        count++;
        if(key + arr[count] == target){
            pairs.push([key,arr[count]])
        }
    }
    return  pairs
}

console.log(frequency([1,3,4,6,8,9],7));