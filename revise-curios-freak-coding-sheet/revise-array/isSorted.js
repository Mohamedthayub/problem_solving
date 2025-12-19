function sorted(arr){
    for(let i = 0; i<arr.length - 1; i++){
        if(arr[i] > arr[i + 1]){
            return false;
        }
    }
    return true;
}
console.log(sorted([9,1,2,3,4,5]));


/*
check if the array is Sorted or not ? 
Example  : 
[1,2,3,4,5] -> true 

[5,1,2,4] -> false 
*/