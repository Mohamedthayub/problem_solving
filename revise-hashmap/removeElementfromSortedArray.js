function removeElement(arr){
    let map = new Map();

    for(let i = 0; i<arr.length; i++){
        if(!map.has(arr[i])){
            map.set(arr[i],1);
        }
    }
    let index = 0;
    for(let [key,value] of map){
        arr[index] = key;
        index++;
    }
    for(let j = index; j<arr.length; j++){
        arr[j] = "_";
    }
    return index;
    
}
console.log(removeElement([1,1,2,2,3,3]));