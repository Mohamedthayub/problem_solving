let arr =  [2, 5, 3, 8, 1, 8]
let largest = arr[0];
let Slargest =  -1;
for(let i =0 ;i<arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}
for(let j = 0; j<arr.length; j++){
    if(arr[j] != largest && arr[j] > Slargest){
        Slargest = arr[j];
    }
}
let map = new Map();
for(let i  = 0; i<arr.length; i++){
    if(!map.has(arr[i])){
        map.set(arr[i],1)
    }
    else{
        map.set(arr[i], map.get(arr[i]) + 1);
    }
}
let unique = [];
for(let[key,value] of map){
    if(largest == key){
        unique.push([largest,value]);
    }
    if(Slargest == key && Slargest != -1){
        unique.push([Slargest,value]);
    }
}
console.log(unique);
