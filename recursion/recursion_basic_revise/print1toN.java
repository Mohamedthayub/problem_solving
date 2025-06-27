public class Main{
    static void print1toN(int i , int n){
        if(i > n){
            return;
        }
        System.out.println(i);
        print1toN(i+1,n);
    }
    public static void main(String[] args){
        int num = 5;
        print1toN(1,5);
    }
}