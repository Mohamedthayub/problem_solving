function counter1(num,count){
    if(num < 1){
        console.log(count);
        return;
    }
    counter1(num / 10,count + 1);
}
counter1(12345,0);

