public class main{
    public static void main(String[] args){
        int count = 0;
        int col = 5;
        for(int i = 1; i<=col; i++){
            for(int j = 1; j<=i; j++){
                count = count + 1;
                System.out.print(count + " ");
            }
            System.out.print("\n");
        }
    }
}