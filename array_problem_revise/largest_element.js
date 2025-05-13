function findTheLargest(arr){
    let largest = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i]  >  largest){
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findTheLargest([1,2,3,4,5]))
 


let arr  = [5,2,9,5,3,4];
console.log(Math.max(...arr));

