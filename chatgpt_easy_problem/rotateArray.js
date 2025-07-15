function rotateArr(arr){
    let last = arr[arr.length - 1];
    for(let i  =  arr.length - 1; i>0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = last;
    return arr;
}
console.log(rotateArr([1,2,3,4,5]));

/*
🔢 Input: [1, 2, 3, 4, 5]
✅ Output: [5, 1, 2, 3, 4]
*/