let arr  =  [10,3,5,6,2];
let left = [];

left[0] = 1;
for(let i =  0; i<arr.length - 1; i++){
    left[i+1] = left[i] * arr[i] ; 
}
let right = [];
right[arr.length - 1] = 1;
for(let j = arr.length - 1; j>0; j--){
    right[j-1] = right[j] * arr[j];
};

for(let k = 0; k<arr.length; k++){
    arr[k] = left[k] * right[k];
}
console.log(arr);