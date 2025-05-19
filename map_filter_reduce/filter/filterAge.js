const people = [
  { name: "Tom", age: 16 },
  { name: "Jerry", age: 21 },
];

const filteredAge = people.filter(x => x.age > 18);
console.log(filteredAge);