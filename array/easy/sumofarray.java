public class main{
    static int sumofarray(int[] arr){
        int sum = 0; 
        for(int i = 0; i<arr.length; i++){
            sum = sum + arr[i];
        }
        return sum ;
    }
    public static void main(String[] args){
        int[] arr = {1,5,2,3,4};
        System.out.print(sumofarray(arr));
    }
}