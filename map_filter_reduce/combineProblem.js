const users = [
  { name: "A", age: 17 },
  { name: "B", age: 21 },
  { name: "C", age: 19 },
];


const result = users.filter(x => x.age > 18);
console.log(result);