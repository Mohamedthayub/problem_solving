function removeDuplicates(arr){
    let slow = 0;
    for(let fast = 1; fast <arr.length; fast++){
        if(arr[slow] != arr[fast]){
            slow++;
            arr[slow] = arr[fast];
        }
    }
    return slow+1;
}
console.log(removeDuplicates([1,1,2,2,3]));
console.log(removeDuplicates([2, 2, 2, 2, 2]));
console.log(removeDuplicates([1, 2, 3, 4, 5]));