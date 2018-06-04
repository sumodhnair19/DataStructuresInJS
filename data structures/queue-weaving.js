import Queue from './queue.js';

class QueueWeave{
    constructor(q1, q2){
        this.q1 = q1;
        this.q2 = q2;
        this.arr = [];
    }
    weave(){
        while(this.q1.peek() || this.q2.peek()){
            if(this.q1.peek()){
                this.arr.push(this.q1.dequeue());
            }
            if(this.q2.peek()){
                this.arr.push(this.q2.dequeue());	
            }
        }
        return this.arr;
    }
}