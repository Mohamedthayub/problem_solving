public class main{
    public static void main(String[] main){
        int col = 5;
        for(int i = 1; i<=col; i++){
            for(int j = 1; j<=col - i; j++){
                System.out.print(" ");
            }
            for(int j = 1; j<=i ;j++){
                System.out.print("* ");
            }
            System.out.print("\n");
        }

    }
}

/*
    * 
   * * 
  * * * 
 * * * * 
* * * * * 
*/