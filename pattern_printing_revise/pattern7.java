public class main{
    public static void main(String[] args){
        int col = 4;
        for(int i = 1; i<=col; i++){
            for(int j = 1; j<=i; j++){
                System.out.print("*");
            }
            for(int j = 1; j<= 2 *( col - i); j++){
                System.out.print(" ");
            }
            for(int j = 1; j<=i; j++){
                System.out.print("*");
            }
            System.out.print("\n");
        }
    }
}
/*
*      *
**    **
***  ***
********
*/