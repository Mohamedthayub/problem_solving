let  s = ["h","e","l","l","o"];
let reverse = [];
for(let i = 1; i<=s.length; i++){
    reverse[i-1] = s[s.length - i];
}

console.log(reverse);