function findThesmallest(arr){
    let smallest = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}
console.log(findThesmallest([1,2,3,4,5,6]));

let arr = [1,2,3,4,5];
let result = Math.min(...arr);
console.log(result);