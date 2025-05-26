let num = 1004;
let res = num.toString();
let str = "";
for(let  i = 0; i<res.length; i++){
    if(res[i] == "0"){
        str = str + "5";
    }
    else{
        str = str + res[i];
    }
}
console.log(str);