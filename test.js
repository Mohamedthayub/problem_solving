let words = ["apple", "civic", "crown", "aba"];

let first = words[0].charAt(0);
let last = words[0].charAt(words[0].length-1);

let count = 0;
for(let word of words){
    if(word[0] == word[word.length -1]){
        count++;
    }
}
console.log(count);