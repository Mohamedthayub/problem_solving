function checkPalidrome(arr){
    let start = 0;
    let end = arr.length - 1;
    while(start< end){
        if(arr[start] != arr[end]){
            return false;
        }
        start++;
        end--
    }
    return true;
}
console.log(checkPalidrome([1,1,1,1,1]));
console.log(checkPalidrome([1,2,3,4,5]));