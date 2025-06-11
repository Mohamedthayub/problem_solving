function removeduplicates(arr){
    let map = new Map();
    let temp = [];
    arr.forEach((item) => {
        if(map[item] == undefined){
            map[item] = 1;
        }
        else{
            map[item]++;
        }
    })
    for(let key in map){
        temp.push(Number(key))
    }
    return temp;
}
console.log(removeduplicates([1,1,1,2,2,2,2,2,2,,3,3,3,4,4,4,5,5]));


// let arr = [1,2,3,4,3,1,2];

// arr = arr.sort();
// console.log(arr);        temp.push(key);