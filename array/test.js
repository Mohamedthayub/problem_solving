// let str  = "hello";
// let temp = "";
// for(let i = str.length - 1; i >=0; i--){
//     temp += str[i];
// }
// for(let j = 0; j<temp.length; j++){
//     str[j] = temp[j];
// }
// console.log(temp);


function reverseString(str){
    let arr = str.split("");
    let start = 0;
    let end = str.length - 1;
    while(start < end){
        let temp = arr[end];
        arr[end] = arr[start];
        arr[start] = temp;

        
        start++;
        end--

    }
    return arr.join("");
}
console.log(reverseString("thayub"));