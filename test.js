let temp = [];
let ops = ["5","2","C","D","+"];
ops.forEach((item) => {
    if(item == Number(item)){
        temp.push(Number(item));
    }
    if(item == "C"){
        temp.pop();
    }
    if(item == "D"){
        let double = 2 * temp[temp.length - 1];
        temp.push(double);      
    }
    if(item == "+"){
        let last = temp[temp.length - 1];
        let last2 = temp[temp.length - 2];
        temp.push(last + last2);
    }
    
})
let result = temp.reduce((acc,sum) => acc  + sum);
console.log(result);