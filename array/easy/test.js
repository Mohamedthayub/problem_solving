function unionOfArray(arr,arr2){
    let set = new Set([...arr,...arr2]);

    let newArr = Array.from(set);

    let afterSort = newArr.sort((a,b) => a -b);
    return afterSort
    

}
console.log(unionOfArray([1,2,3,4,5],[6,6,7,9]));