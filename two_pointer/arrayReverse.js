function arrayReverse(arr){
    let start = 0;
    let end = arr.length - 1;

    if(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }
    return arr;
}
console.log(arrayReverse([1,2,3,4,5]));


/*
Reverse an Array Reverse the elements of an array using the two-pointer approach.
*/