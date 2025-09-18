function majorityElement(arr){
    let map = new Map();
    let n = Math.floor(arr.length / 2);
    for(let i = 0; i<arr.length; i++){
        if(!map.has(arr[i])){
            map.set(arr[i],1);
        }
        else{
            map.set(arr[i], map.get(arr[i]) + 1);
        }
    }
    for(let[key,value] of map){
        if(value > n){
            return key;
        }
    }
    return -1
}
console.log(majorityElement([2,2,1,1,1,2,2]));