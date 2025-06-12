// const { forwardRef } = require("react");

let num = [1,2,3,4,5,6,6,6];
let num2 = [7,8,9];
for(let j = 0;j<num2.length; j++){
    num.push(num2[j]);
}
let map = new Map();
num.forEach((item) => {
    if(!map.has(item)){
        map.set(item, 1);
    }
    else{
        map.set(item,map.get(item) + 1);
    }
})
let temp = [];
for(let key of map.keys()){
    temp.push(key);
}

console.log(temp.length)