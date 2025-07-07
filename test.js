let arr = [10,20,10,5,15];
let prefixArr = [];
prefixArr[0] = arr[0];
for(let i = 1; i<arr.length; i++){
    prefixArr[i] = prefixArr[i-1] + arr[i];
}