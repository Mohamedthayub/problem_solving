const letters = ['a', 'b', 'a', 'c', 'a'];


const result = letters.reduce((acc,curr) => {
    if(acc[curr]){
        acc[curr]++;
    }
    else{
        acc[curr] = 1;
    }
    return acc;
},
{})
console.log(result);