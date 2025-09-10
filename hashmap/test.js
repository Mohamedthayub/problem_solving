let arr = [1,2,3,4,5,6];
let map = new Map();
arr.forEach((num) => {
    if(!map.has("even")){
        map.set("even",0);
    }
    if(!map.has("odd")){
        map.set("odd",0);
    }
    if(num % 2 == 0){
        map.set("even",map.get("even") + 1);
    }
    if(num % 2 != 0){
        map.set("odd",map.get("odd") + 1);
    }
})
console.log(map);
