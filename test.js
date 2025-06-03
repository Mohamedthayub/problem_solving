let arr = [12,0];
// output = [180,600,360,300,900];
let value = [];
for(let i = 0; i<arr.length; i++){
    let sum = 1;
    for(let j = 0; j<arr.length; j++){
        if(j == i){
            continue
        }
        sum = sum  * arr[j];
       
    }
     value.push(sum)
    sum = 1;
}
console.log(value);