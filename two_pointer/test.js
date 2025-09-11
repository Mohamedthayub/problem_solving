// before using two pointer the array should be sorted 

function findTheTarget(arr,target){
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        let sum = arr[start] + arr[end];
        if(sum == target){
            return true;
        }
        else if (sum == target){
            start++;
        }
        else{
            end--
        }
    }    
    return false;
}
console.log(findTheTarget([-3,-1,0,1,2,],-2));