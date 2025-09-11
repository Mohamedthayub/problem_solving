let arr = [1,1,2,2,3,3];
let newSet = new Set();

for(let i = 0; i<arr.length; i++){
    if(!newSet.has(arr[i])){
        newSet.add(arr[i]);
    }
}
let index = 0;
for(let data of newSet){
    arr[index] = data;
    index++;
}
console.log(index);