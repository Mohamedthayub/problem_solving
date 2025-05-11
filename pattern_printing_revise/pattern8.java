public class Main{
    public static void main(String[] main){
        int num = 12;
        int col = 4;
        for(int i = 0; i<col; i++){
            for(int j = 1; j<=col - i; j++){
                System.out.print("*");
            }
            for(int k = 1; k<= 2 * i; k++){
                System.out.print(" ");
            }
            for(int r = 1; r<= col - i; r++){
                System.out.print("*");
            }
            System.out.println();
        }
        
    }
}

/*
**********
****  ****
***    ***
**      **
*        *

*/