let arr = [1,2,3,4];
let arr2 = [];
let count = arr.length ;
for(let i = 0; i<arr.length; i++){
    arr2[i] = arr[i];
}
// console.log(arr.length * 2);
for(let j = arr.length-1; j>=0;  j--){
    arr2[count]  = arr[j];
    count++;
}
console.log(arr2);