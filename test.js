function rotateArrayByone(arr){
    let first = arr[0];
    for(let i = 1; i<arr.length; i++){
        arr[i-1] = arr[i];
    }
    arr[arr.length - 1] = first;
    return arr ;
}

console.log(rotateArrayByone([5,4,3,2,1]));
//[1,2,3,4,5];
// [2,3,4,5,1];

// 2,3,4,5
// 0,1,2,3 