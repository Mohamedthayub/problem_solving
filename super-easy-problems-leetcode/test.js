let n = 7;
let sum = 0;
for(let i = 1; i<=n; i++){
     if(i % 3 == 0  ||  i % 5 == 0 || i % 6 == 0 || i % 7 == 0){
        sum = sum + i
     }
}

console.log(sum);