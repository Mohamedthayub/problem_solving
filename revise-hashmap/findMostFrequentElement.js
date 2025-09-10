let number = [1, 2, 2, 3, 3, 3];
let map = new Map();
for(let  i = 0; i<number.length; i++){
    if(!map.has(number[i])){
        map.set(number[i],1);
    }
    else{
        map.set(number[i], map.get(number[i])+1);
    }
}
let largest = 0;
for(let [key,value] of map){
    if(value  > largest){
        largest = value;
    }
}
console.log(largest);