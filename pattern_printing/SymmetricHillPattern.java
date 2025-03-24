public class Main{
    public static void main(String[] args){
        int col = 4;
        for(int i = 1; i<=col; i++){
            int space = 0;
            for(int j = 1; j<=i; j++){
                System.out.print("*");
            }
            for(int k = 1; k<= 2 *(col - i); k++){
                System.out.print(" ");
            }
            for(int t = 1; t<=i; t++){
                System.out.print("*");
            }
            System.out.println();
            space += 2;
        }
    }
}
/*
*      *
**    **
***  ***
********
*/