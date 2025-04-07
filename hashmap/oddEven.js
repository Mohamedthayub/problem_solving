let numbers= [1,2,3,4,5];
let hashmap = {};
numbers.forEach(num =>{
    if(num % 2 == 0){
        hashmap["even"] = (hashmap["even"] || 0) + 1;
    }
    else{
        hashmap["odd"] = (hashmap["odd"] || 0) + 1;
    }

})
console.log(hashmap)