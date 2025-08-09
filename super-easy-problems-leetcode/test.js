let num = 1248;
// let temp = num;
let count = 0;
let str = num.toString();
for(let i = 0; i<str.length; i++){
    if(num % Number(str[i]) == 0){
        count++;
    }
}
console.log(count);