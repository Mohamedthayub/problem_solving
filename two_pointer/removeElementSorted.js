function twoPointer(arr){
    let  i = 0;
    for(let j = 1; j<arr.length; j++){
        if(arr[j]  != arr[i]){
            i++
            arr[i] = arr[j];
            
        }
    }
    return i + 1;
}
console.log(twoPointer([1,1,2,2,3,3,3]));

/*
Complexity

Time: O(n) (single scan)

Space: O(1) (in-place, no extra data structures)
*/