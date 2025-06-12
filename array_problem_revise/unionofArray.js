class Solution {
    findUnion(a, b) {
        // code here
        for(let i = 0; i<b.length; i++){
            a.push(b[i]);
        }
        let set = new Set(a);
        a = Array.from(set);
        return a.length;
        
    }
}
