function twoArrays(arr,arr2){
    let map = new Map();
    let union = [];
    for(let i = 0; i<arr.length; i++){
        if(!map.has(arr[i])){
            map.set(arr[i],1);
        }
    }
    for(let j = 0; j<arr2.length; j++){
        if(!map.has(arr2[j])){
            map.set(arr2[j],1);
        }
    }
    for(let [key,value] of map){
        union.push(key);
    }

    let  afterSort = union.sort((a,b)=> a-b);
    return afterSort;
}
console.log(twoArrays([5,4],[1,2]));
