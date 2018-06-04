class Stack{
    constructor(){
        this.stack = [];
    }
    push(){
        this.stack.push(data);
    }
    pop(){
        return this.stack.pop();
    }
    peek(){
        return this.stack[this.stack.length - 1];
    }
    print(){
        return this.stack.join(" ");
    }
    length(){
        return this.stack.length;
    }
}