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
    }
}
/*
********
***  ***
**    **
*      *
*/