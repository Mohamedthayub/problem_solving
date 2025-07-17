function checkForDuplicates(arr){
    for(let i = 0; i<arr.length - 1; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] == arr[j]){
                return true;
            }
        }
    }
    return false;
}
console.log(checkForDuplicates([1,2,3,4,5,1]));

function checkForDuplicates(arr){
    let map = new Map();
    for(let i = 0; i<arr.length; i++){
        if(!map.has(arr[i])){
            map.set(arr[i],1);
        }
        else{
            map.set(arr[i], map.get(arr[i]) + 1);
        }
    }
    for(let [key,value] of map){
        if(value > 1){
            return true;
        }
    }
    return false;

}
console.log(checkForDuplicates([1,2,3,4,5]));

/*

🔢 Input: [1, 2, 3, 4, 2]
✅ Output: true

Input : [1,2,3,4,5]
output: false
*/