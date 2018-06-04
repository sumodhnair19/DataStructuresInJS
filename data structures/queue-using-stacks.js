import Stack from './stack.js';

class QueueUsingStack{
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
        this.arr = [];
    }
    enqueue(){
        //push in first stack
        this.stack1.push(data);
    }
    dequeue(){
        //copy over from first to second - order would become opposite
        //remove from second
        //copy back to first
        while(this.stack1.peek()){
            this.stack2.push(this.stack1.pop());
        }
        let record = this.stack2.pop();
        while(this.stack2.peek()){
            this.stack1.push(this.stack2.pop());
        }
        return record;
    }
    peek(){
        //similar to dequeue
        while(this.stack1.peek()){
            this.stack2.push(this.stack1.pop());
        }
        let record = this.stack2.peek();
        while(this.stack2.peek()){
            this.stack1.push(this.stack2.pop());
        }
        return record;
    }
}