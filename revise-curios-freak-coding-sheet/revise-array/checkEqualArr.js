function checkArr(arr1,arr2){
    let map = new Map();

    if(arr1.length != arr2.length){
        return false;
    }

    for(let value of arr1){
        map.set(value, (map.get(value) || 0) + 1);
    }

    for(let value of arr2){
        if(!map.has(value) || map.get(value) === 0){
            return false;
        }
        map.set(value, map.get(value) -1);
    }
    
}
console.log(checkArr( [1, 2, 5], [2, 4, 15]))