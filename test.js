let map = new Map();
let arr = [1,2,3,4,5,5];
arr.forEach((item) => {
    if(!map.has(item)){
        map.set(item, 1);
    }
    else{
        map.set(item, map.get(item) + 1);
    }
})
for(let [key,value] of map){
    let temp = 5;
    if(map.has(temp)){
        console.log(map.get(temp))
    }
}