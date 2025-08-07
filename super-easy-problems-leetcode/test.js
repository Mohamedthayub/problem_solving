function  check(words){
    for(let i = 0; i<words.length; i++){
    if(words[i] == words[i].split('').reverse().join('')){
        return words[i];
    }
}
}
let words = ["abc","car","ada","racecar","cool"];
console.log(check(words));
