
class Solution {
    public String longest(List<String> arr) {
        // code here
        String temp = arr.get(0);
        for(int i = 0; i<arr.size(); i++){
            if(arr.get(i).length() > temp.length()){
                temp = arr.get(i);
            }
        }
        return temp;
      
    }
    
}

/*
Given an array arr[] containing strings of names. Your task is to return the longest string. If there are multiple names of the longest size, return the first occurring name.

Examples :

Input: arr[] = ["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks"]
Output: "GeeksforGeeks"
Explanation: name "GeeksforGeeks" has maximum length among all names. 
Input: arr[] = ["Apple", "Mango", "Orange", "Banana"]
Output: "Orange"
Explanation: names "Orange" and "Banana" both have maximum length among all names but Orange comes first so answer will be "Orange". 

*/