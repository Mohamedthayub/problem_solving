let arr = [85, 25, 1, 32, 54, 6];
let arr2 = [85,2];
for(let i = 0; i<arr2.length; i++){
    arr.push(arr2[i]);
}
let result = new Set(arr);
let array = Array.from(result);
console.log(array.length);