let nums  = [3,2,4];
// output = [1,2];
let target  = 6;
function TwoSum(arr,target){
    let map = new Map();
    arr.forEach((item) => {
        if(map[item] == undefined){
            map[item]  = 1;
        }
        else{
            map[item]++;
        }
    })
    let sum = 0;
}