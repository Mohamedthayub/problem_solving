// function isPerfect(n) {
//         if (n <= 1) return false;  // 1 is not a perfect number

//         let sum = 1; // 1 is always a divisor
//         for (let i = 2; i * i <= n; i++) {
//             if (n % i === 0) {
//                 sum += i;
//                 if (i !== n / i) { 
//                     sum += n / i; // add the paired divisor
//                 }
//             }
//         }
//         return sum === n;
// }
// console.log(isPerfect(5));

let num = 6;
let sum = 1;
if(num <= 1){
   return false;
}
for(let i = 2; i*i<=num; i++){
   if(num %  i == 0){
      sum = sum + i;
      if(i !== num / i){
         sum = sum + num / i;
      }
   }
}
console.log(num == sum);