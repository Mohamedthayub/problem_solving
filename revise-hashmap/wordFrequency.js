let str = "the cat and the dog";
let res  = str.split(" ");
let map = new Map();
res.forEach((item) => {
    if(!map.has(item)){
        map.set(item,1);
    }
    else{
        map.set(item, map.get(item) + 1);
    }
})
console.log(map);