public class Main{
    public static void main(String[] args){
        int col = 5;
        // int space = 0;
        int count = 15;
        for(int i = 1; i<=col; i++){
            for(int  j = 1; j<=i; j++){
                 System.out.print(count + " ");
                 count-= 1;
            }
            System.out.println();
           
        }
    }
}
/*
********
***  ***
**    **
*      *
*/