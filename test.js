function findThePair(arr,target){
    let start = 0;
    let end = arr.length - 1;
    while(start  < end){
        let sum = arr[start] + arr[end];
        if(sum  == target){
            return true;
        }
        else if (sum < target){
            start++;
        }
        else{
            end--;
        }
    }
    return false;
}
console.log(findThePair([1,2,3,4,5,6],3));