public class main{
    public static void main(String[] args){
        int col = 5;
        for(int i = 0; i<col; i++){
            for(int j = 1; j<=col - i; j++){
                System.out.print("*");
            }
            for(int k = 1; k<=i; k++){
                System.out.print(" ");
            }
            System.out.println();
        }
        for(int t = 2; t<=col; t++){
            for(int f = 1; f <= t; f++){
                System.out.print("*");
            }
            for(int q = 1; q <= col - t; q++){
                System.out.print(" ");
            }
            System.out.println();
        }
    }
}

/*
*****
****
***
**
*
**
***
****
*****
*/
