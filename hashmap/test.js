const { hash } = require("bcrypt");

let map = new Map();

let arr = [1,2,3,4,5];

arr.forEach((item) => {
    if(!map[item]){
        map.set(item,1);
    }
    else{
        map.set(item , hash.get(item) + 1);
    }
})
for(let [key,value] of  map){
    if(key == 2){
        console.log("false");
    }
}
