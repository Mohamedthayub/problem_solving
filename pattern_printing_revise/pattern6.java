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

/*
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 

*/