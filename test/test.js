let arr = [0,0,1,1,1,2,2,3,3,4];
let map = new Map();
for(let i = 0; i<arr.length; i++){
    if(!map.has(arr[i])){
        map.set(arr[i],1);
    }
    else{
        map.set(arr[i], map.get(arr[i]) + 1);
    }
}
let count = 0;
for(let [key,value] of map){
    arr[count] = key;
    count++;
}
for(let i = count; i<arr.length; i++){
    arr[i] = "_";
}
console.log(arr);
console.log(count);