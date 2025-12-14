function checkArr(arr1,arr2){
    let map = new Map();

    if(arr1.length != arr2.length){
        return false;
    }
    
    for(let value  of arr1){
        if(!map.has(value)){
            map.set(value, 1);
        }
    }
    for(let num of arr2){
        if(!map.has(num)  || map.get(num) == 0){
            return false;
        }
    }
    return true;
}
console.log(checkArr( [1, 2, 5], [2, 4, 15]))