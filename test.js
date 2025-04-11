function check(arr){
    let first = 0;
    let last = arr.length - 1;
    while(first < last){
        if(arr[first] != arr[last]){
            return false;
        }
        first++;
        last--;
    }
    return true;
    
}
console.log(check([1,2,3,4,5]));