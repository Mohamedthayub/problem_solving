function  reverseString(str){
    let stact  = [];
    for(let char of str){
        stact.push(char);
    } 
    let reversed = "";
    while(stact.length > 0){
        reversed = reversed + stact.pop();
    }
    return reverseString;
}
console.log(reverseString("VENKATESH"));