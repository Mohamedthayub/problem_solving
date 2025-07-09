let arr = [1,2,3,4,5];
// output : [5,1,2,3,4];
let last = arr[arr.length-1];
for(let i = arr.length - 2 ; i>=0; i--){
   arr[i+1] = arr[i];
}
arr[0] = last;
console.log(arr);

let arr2 = [1,2,3,4,5];
let first = arr2[0];
for(let j = 1; j<arr2.length; j++){
   arr2[j-1] = arr2[j];
}
arr2[arr2.length-1] = first;
console.log(arr2);