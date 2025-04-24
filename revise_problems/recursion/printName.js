let count  = 1;
function printNtime(){
    if(count > 3){
        return;
    }
    count++;
    console.log("Hello Thayub");
    printNtime()
}
printNtime();