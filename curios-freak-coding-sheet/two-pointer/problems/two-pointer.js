function findTheTarget(arr,target){
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        let result = arr[start] + arr[end];
        if(result == target){
            return true;
        }
        else if (result < target){
            start++;
        }
        else{
            end--;
        }
    }
    return false;
}
console.log(findTheTarget([1,2,3,4,5],8));
