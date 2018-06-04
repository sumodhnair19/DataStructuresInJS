class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(){
        this.queue.unshift(data); // this.queue.push(data);
    }
    dequeue(){
        return this.queue.pop(); //this.queue.shift();
    }
    peek(){
        return this.queue[this.queue.length - 1]; //this.queue[0];
    }
    print(){
        return this.queue.join(" ");
    }
    length(){
        return this.queue.length;
    }
}