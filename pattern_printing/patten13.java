public class Main{
    public static void main(String[] args){
        int col = 4;
        int space = 0;
        for(int i = 0; i<col; i++){
            for(int j = 1; j<=col - i; j++){
                System.out.print("*");
            }
            for(int k = 1; k<=space; k++){
                System.out.print(" ");
            }
            for(int t = 1; t<=col - i; t++){
                System.out.print("*");
            }
            space += 2;
            System.out.println();
        }
        int col2 = 4;
         for(int i = 1; i<=col2; i++){
            int space2 = 0;
            for(int j = 1; j<=i; j++){
                System.out.print("*");
            }
            for(int k = 1; k<= 2 *(col2 - i); k++){
                System.out.print(" ");
            }
            for(int t = 1; t<=i; t++){
                System.out.print("*");
            }
            System.out.println();
            space2 += 2;
        }
    }
}

/*
********
***  ***
**    **
*      *
*      *
**    **
***  ***
********
*/