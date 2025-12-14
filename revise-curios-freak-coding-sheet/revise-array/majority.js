function majorityElement(arr){
    let time = Math.floor(arr.length / 2);
    let map = new Map();
    for(let value of arr){
        map.set(value, (map.get(value) || 0) + 1);
    }
    for(let [key,value] of map){
        if(value  > time){
            return key;
        }
    }
    return -1;
}
console.log(majorityElement([2, 2, 1, 2, 3, 2]))