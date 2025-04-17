function recursive(){
    console.log("recursion");
    recursive();
}
recursive();

/* what is happening in the program when the program comes to fifth line it will call the function 
the function  comes to third line it will again  call again  then it comes to third it will call again it is keep calling 
until  function get the stackoverflow the error . 
what is happening in the program . when it is calling the function the first program did not end . it is keep calling stack memory is filling after fill the stack memory 
the program will be stopped then get stack overflow error 


*/


/*
what is recursion ? 
the function call itself until a specific condition is met that is recursion 
*/