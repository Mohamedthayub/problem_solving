let num = [1,0,1,9,0,2,1,0,3];
let numbers = [];
for(let i = 0; i<num.length; i++){
    if(num[i] != 0){
        numbers.push(num[i]);
    }
}
for(let j = 0; j<num.length; j++){
    if(num[j] == 0){
        numbers.push(num[j]);
    }
}

for(let k = 0; k<numbers.length; k++){
    num[k] = numbers[k];
}
console.log(num);