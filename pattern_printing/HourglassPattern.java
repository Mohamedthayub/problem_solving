public class main{
    public static void main(String[] args){
        int col = 5;
        for(int i = 0; i<col; i++){
            for(int j = 1 ; j<=i; j++){
                System.out.print(" ");
            }
            for(int k = 1; k<=col - i; k++){
                System.out.print("* ");
            }
            System.out.println();
        }
        for(int i = 2; i<=col; i++){
            for(int t = 1; t <= col - i; t++){
                System.out.print(" ");
            }
            for(int n = 1; n<=i; n++){
                System.out.print("* ");
            }
            System.out.println();
        }

    }
}




/*

 * * * * *
  * * * * 
   * * *
    * *
     *
    * *
   * * *
  * * * *
 * * * * *

*/