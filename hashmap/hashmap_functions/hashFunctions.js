let map = new Map();// this is how create map
console.log(map); // here we print the map

map.set("apple",10);
map.set("banana",20);
map.set("jackfruit",40); // we set the value in map
console.log(map);

map.forEach((key,value) =>{
    console.log(key,value);
})

console.log(map.has("apple")); // we check if map has the "banana" key



console.log(map.get("banana")); // we get value with banana key

map.delete("banana"); // we delete the value with the key
console.log(map);
map.clear(); // we clear the all value in map 
console.log(map);


