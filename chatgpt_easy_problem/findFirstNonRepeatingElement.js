function firstNonRepeatingElement(arr){
    let map = new Map();
    for(let t = 0; t<arr.length; t++){
        if(!map.has(arr[t])){
            map.set(arr[t],1);
        }       
        else{
            map.set(arr[t],map.get(arr[t]) + 1);
        }
    }
    for(let [key,value] of map){
        if(value  == 1){
            return key;
        }
    }
}

console.log(firstNonRepeatingElement([9, 4, 9, 6, 7, 4]))


/*

🔢 Input: [9, 4, 9, 6, 7, 4]
✅ Output: 6
*/