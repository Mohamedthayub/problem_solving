function print1toN(num){
    if(num < 1){
        return;
    }
    console.log(num);
    print1toN(num - 1);
}
print1toN(10);