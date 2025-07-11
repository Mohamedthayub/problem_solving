function segregrateOddEven(arr){
    let start = 0;
    let end  = arr.length - 1;
    while(start <= end){
        if(arr[start] % 2  == 0) {
            start++;
        }
        else if(arr[end] % 2 != 0){
            end--;
        }
        else{
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    return arr;
}
console.log(segregrateOddEven([1,2,3,4,5,6]));
