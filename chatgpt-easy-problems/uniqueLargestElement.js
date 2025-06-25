
function  uniqueLargestElement(arr){
    let map = new Map();
let largest = [];
arr.forEach((item) => {
    if(!map.has(item)){
        map.set(item,1);
    }
    else{
        map.set(item , map.get(item) + 1);
    }
})
for(let [key,value ] of map){
    if(value == 1){
        largest.push(key);
    }
}


if(largest.length === 0){
    return -1;
}
else{
    return Math.max(...largest);
}

}
console.log(uniqueLargestElement([5, 7, 7, 2, 5, 9, 9, 11]));
