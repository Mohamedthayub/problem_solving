function findTheCommonElements(arr1,arr2){
    let common  = [];
    for(let i = 0; i<arr1.length; i++){
        for(let j = 0; j<arr2.length; j++){
            if(arr1[i] == arr2[j]){
                common.push(arr1[i]);
            }
        }
    }
    return common.length > 0 ? common : [];
}
console.log(findTheCommonElements([1,2,3,4,5],[4,3,1,5,6]));


/*

🔢 Input: [1, 2, 3] and [2, 3, 4]
✅ Output: [2, 3]

*/