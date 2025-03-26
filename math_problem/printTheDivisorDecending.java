public class Main{
    public static void main(String[] args){
        int num = 20;
        for(int i = num; i>=1; i--){
            if(num % i == 0){
                System.out.print(i + " ");
            }
        }
    }
}