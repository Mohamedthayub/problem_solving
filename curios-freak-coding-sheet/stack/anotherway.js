class Stack{
    constructor(){
        this.items = [];
    }    
    push(element){
        this.items.push(element);
    }
}
const stack = new Stack();

let numbers = [1,2,3,4,5];
for(let num of numbers){
    stack.push(num);
}


