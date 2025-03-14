public class main{
    public static void main(String[] main){
        int num = 5;
        for(int i = 0; i<num; i++){
            for(int j = 1; j<=num - i; j++){
                System.out.print("*");
            }
            for(int k = 1; k<=i; k++){
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

*/