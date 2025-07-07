let arr = [10,3,5,6,2];
let left  = [1];
let right = [];
for(let i = 0; i<arr.length-1; i++){
    left[i+1] = left[i] * arr[i];
}
right[arr.length - 1] = 1
for(let j = arr.length - 1; j>0; j--){
    right[j-1] = right[j] * arr[j];
}
let  result = [];
for(let k = 0; k<left.length; k++){
    result[k] = left[k] * right[k];
}
console.log(result);