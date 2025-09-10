
function findMajorityElement(arr){
    let map = new Map();
    let majority = arr.length / 2;
for(let i = 0; i<arr.length; i++){
    if(!map.has(arr[i])){
        map.set(arr[i], 1);
    }
    else{
        map.set(arr[i],map.get(arr[i]) + 1);
    }
}
for(let [key,value] of map){
    if(value > majority){
        return key
    }
}
return -1;
}

console.log(findMajorityElement([3, 3, 4, 2, 3, 3]));


