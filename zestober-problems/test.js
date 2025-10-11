let str = "AAAAA";
let char = "AA";
// let result = str.split(char);
// console.log(result);
let arr = [];
let count = 0;
let temp = "";
for(let i = 0; i<=str.length - char.length; i++){
    let temp = str.substring(i , i+char.length);
    if(temp == char){
        count++;
    }
   
}
console.log(count);
