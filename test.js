let arr = [4,4,2,4,3,4,4,3,2,4];
let number = Math.floor(arr.length / 2);

let map = new Map();

arr.forEach((item) => {
    if(!map.has(item)){
        map.set(item,1);
    }
    else{
        map.set(item, map.get(item) + 1);
    }

})
for(let [key ,value] of map){
    if(value > number){
        console.log(key);
    }
}