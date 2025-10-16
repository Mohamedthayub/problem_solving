function moveZeroToEnd(arr){
    let index = 0;
    for(let j = 0; j<arr.length; j++){
        if(arr[j]  != 0){
            arr[index] = arr[j];
            index++;
        }
    }
    for(let i = index; i<arr.length; i++){
        arr[i] = 0;
    }
    return arr;
}
console.log(moveZeroToEnd([0,0,0,1,2,3]));
console.log(moveZeroToEnd([1,0,2,0,3,0]));
console.log(moveZeroToEnd([5,5,5,5,5]));
