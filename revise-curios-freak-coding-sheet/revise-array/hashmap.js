
let arr = [1,2,3,4,5,5,5,5];

let map = new Map();

for(let value of arr){
    map.set(value,(map.get(value) || 0) + 1 );
}
console.log(map);

