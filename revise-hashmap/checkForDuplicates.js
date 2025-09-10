function checkDuplicates(arr){
    let map = new Map();
    arr.forEach((item) => {
        if(!map.has(item)){
            map.set(item, 1);
        }
        else{
            map.set(item, map.get(item) + 1);
        }
    })
    for(let [key,value] of map){
        if(value > 1){
            return false;
        }
    }
    return true;
}
console.log(checkDuplicates([1,2,3,4,5,6,5]));