public class main{
    public static void main(String[] args){
        int col = 5;
        for(int i = 0; i<col; i++){
            for(int j = 0; j<=i; j++){
                System.out.print(" ");
            }
            for(int k = 1; k<=col; k++){
                System.out.print("*");
            } 
            System.out.println();
        }
    }
}