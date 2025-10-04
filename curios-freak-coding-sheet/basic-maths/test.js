function reverseNum(num){
    let str = num.toString();
    let temp = "";
    for(let i = str.length - 1 ; i>=0; i--){
        if(str[i] == "0"){
            continue;
        }
        else{
            temp = temp + str[i];
        }
    }
    return Number(temp);
}
console.log(reverseNum(123));