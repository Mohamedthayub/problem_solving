function arraySubset(arr1,arr2){
    let newSet = new Set();
    for(let i = 0; i<arr1.length; i++){
        if(!newSet.has(arr1[i])){
            newSet.add(arr1[i]);
        }
    }
    for(let j = 0; j<arr2.length; j++){
        if(!newSet.has(arr2[j])){
            return false;
        }
    }
    return true;
}
console.log(arraySubset([10, 5, 2, 23, 19],[19,5,1]))
