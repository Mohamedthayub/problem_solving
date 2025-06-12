let map = new Map();
console.log(map);
console.log(typeof(map));

map.set("name","thayub");



map.forEach((key,value) => {
    console.log(key,value);
})


map.get("name");
console.log(map);
map.clear();

console.log(map);