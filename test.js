let arr = [1,2,3,4,5,6,7,8];
let k = 3;
[arr[k-1], arr[arr.length -k]] = [arr[arr.length - k],arr[k-1]];
console.log(arr);