// the problem is find the gcd of two number 
function  findGcd(num1,num2){
    let gcd = [];
    for(let i = 1; i<=num2; i++){
        if(num1 % i == 0 && num2 % i == 0){
            gcd.push(i);
        }
    }
    return Math.max(...gcd);
}
console.log(findGcd(12,12));

// this logic is first came in my mind  i have an another approach 

function findGcd(num1,num2){
    let gcd = 1;
    for(let i = 1; i<=num2; i++){
        if(num1 % i == 0 && num2 % i == 0){
            gcd = i;
        }
    }
    return gcd;
}

