let str = "";
let num = 1004;
let str2 = num.toString();
let five = "5";
for(let i = 0; i<str2.length; i++){
    if(str2[i] == "0"){
       str = str + five;
    }
    else{
        str = str + str2[i];
    }
}

str = Number(str);
console.log(str);
console.log(typeof(str));