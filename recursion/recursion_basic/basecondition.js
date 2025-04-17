let count = 0;
function recursive(){
    if(count == 4){
        return;
    }
    console.log(count);
    count++;
    recursive();
}
recursive();


