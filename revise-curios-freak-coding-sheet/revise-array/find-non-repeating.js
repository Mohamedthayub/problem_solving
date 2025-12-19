function findTheNonRepeat(arr){
    let map  = new Map();
    for(let value of arr){
        map.set(value , (map.get(value) || 0) + 1);
    }
    for(let [key,value] of map){
        if(value == 1){
            return key;
        }
    }
    return -1;
}
console.log(findTheNonRepeat([1,2,3,4,5,6]));


/*
find the first repeat number 

*/