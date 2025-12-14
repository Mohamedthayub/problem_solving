function remove(arr){
    let slow = 0;
    for(let i = 1; i<arr.length; i++){
        if(arr[slow] != arr[i]){
            slow++;
            arr[slow] = arr[i];
        }
    }
    return slow+1
}
console.log(remove([1,1,2,2,3]));