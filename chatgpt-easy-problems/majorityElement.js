function majorityElement(arr){
    let map = new Map();
    arr.forEach((item) => {
        if(!map.has(item)){
            map.set(item,1);
        }
        else{
            map.set(item, map.get(item) + 1);
        }
    })
    let n = Math.floor(arr.length / 2);
    for(let [key,value] of map){
        if(value > n){
            return key;
        }
    }
    return  -1;
}
console.log(majorityElement([1, 2, 3, 4]));