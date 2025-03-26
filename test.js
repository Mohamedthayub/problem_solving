let num = 1004;
let arr = num.toString().split("").map(Number);
for(let i = 0; i<arr.length; i++){
    if(arr[i] == 0){
        arr[i] = 5;
    }
}

num = Number(arr.join(""));
console.log(num);