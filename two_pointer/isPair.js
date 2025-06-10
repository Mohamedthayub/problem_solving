function isPair(arr,x){
    let i = 0;
    let j = arr.length - 1;
    while(i < j){
        if(arr[i] + arr[j] == x){
            return true;
        }
        else if (arr[i] + arr[j] > x){
            j -= 1;
        }
        else {
            i +=1;
        }
    }
    return false;
}

console.log(isPair([2,5,8,12,30],17));



/* Function to check whether any pair exists
whose sum is equal to the given x value
*/