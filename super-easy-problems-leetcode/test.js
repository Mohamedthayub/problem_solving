let accounts = [[1,5],[7,3],[3,5]];
let wealth = [];
for(let i = 0; i<accounts.length; i++){
    let sum = 0;
    for(let j = 0; j<accounts[i].length; j++){
        sum = sum + accounts[i][j];
    }
    wealth.push(sum);
    sum  = 0;
}
console.log(wealth);