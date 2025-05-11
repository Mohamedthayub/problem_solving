public class Main{
    public static void main(String[] args){
        int col = 4;
          for(int i = 0; i<col; i++){
            for(int j = 1; j<=i; j++){
                System.out.print(" ");
            }
            for(int k = 1; k<=col - i; k++){
                System.out.print("* ");
            }
            System.out.print("\n");
        } 
        for(int i = 2; i<=col; i++){
            for(int j = 1; j<=col  - i; j++){
                System.out.print(" ");
            }
            for(int k = 1; k<=i; k++){
                System.out.print("* ");
            }
            System.out.println();
        }
    } 
}
/*
* * * * 
 * * * 
  * * 
   * 
  * * 
 * * * 
* * * * 

*/