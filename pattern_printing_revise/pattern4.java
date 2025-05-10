public class main{
    public static void main(String[] args){
        int col = 5;
        for(int i = 0; i<col; i++){
            for(int j = 1; j<=i; j++){
                System.out.print(" ");
            }
            for(int j = 1; j<=col - i; j++){
                System.out.print("*");
            }
            System.out.print("\n");
        }
    }
}

/*
* * * * * 
 * * * * 
  * * * 
   * * 
    * 

*/