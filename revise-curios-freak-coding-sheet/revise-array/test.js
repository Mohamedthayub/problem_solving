let number = [1,2,3,4,5,6];
let map = new Map();

for (let value of number) {
    let key = value % 2 === 0 ? "even" : "odd";
    map.set(key, (map.get(key) || 0) + 1);
}

console.log(map);


// count the odd and even number in the array 
