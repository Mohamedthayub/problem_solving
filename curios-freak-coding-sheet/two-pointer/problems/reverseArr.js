function reverseArray(arr){
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        [arr[start],arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}
console.log(reverseArray([1,2,3,4,5]));
console.log(reverseArray([5,4,4,4]));