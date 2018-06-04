class Node {
    constructor(data, next){
        this.data = data;
        this.next = next || null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
    }
    getFirst(){
        return this.head;
    }
    getLast(){
        if(!this.head) return null;
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        return current;
    }
    getAt(index){
        if(!this.head) return null;
        let counter = 0,
            current = this.head;
        while(current.next){
            if(counter === index) return current;
            current = current.next;
            counter++;
        }
        if(counter === index) return current;
        return null; //-1 would be truthy
    }
    insertFirst(data){
        this.head = new Node(data, this.head);
    }
    insertLast(data){
        if(!this.head) this.head = new Node(data, null);
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = new Node(data, null);
    }
    insertAt(index, data){
      if(!this.head){
        this.head = new Node(data, null);
      }else if(index === 0){
          this.head = new Node(data, this.head);
      }else{
         let current = this.head, counter = 0;
        while(current.next){
          if(counter === index){
            current.next = new Node(data, current.next);
          }
          counter++;
          current = current.next;
        }
        
        //if did not find, add at the end
        current.next = new Node(data, null);
      }
    }
    removeFirst(){
        this.head = this.head.next;
    }
    removeLast(){
        if(!this.head) return null;
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        current.next = null;
    }
    removeAt(index){
      if(!this.head){
        return null;
      }else if(index ===0){
        this.head = this.head.next;
      }else{
        var previous = this.getAt(index - 1); //get an el before the one we have to remove
        if (!previous || !previous.next) return;
        previous.next = previous.next.next;
      }
    }
    size(){
        if(!this.head) return 0;
        if(!this.head.next) return 1;
        let counter = 0, current = this.head;
        while(current){
            counter++;
            current = current.next;
        }
        return counter;
    }
    clear(){
        if(!this.head) return null;
        this.head = null;
    }
    traverse(fn){
        if(!this.head) return null;
        let current = this.head;
        while(current){
            fn(current);
            current = current.next;
        }
    }
    print(){
        if(!this.head) return null;
        let current = this.head;
        while(current){
            console.log(current);
            current = current.next;
        }
    }
}

export default SinglyLinkedList;