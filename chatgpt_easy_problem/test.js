function swap(arr){
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
console.log(swap([1,2,3,4,5,6]));