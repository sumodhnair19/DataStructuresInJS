class Node {
    constructor(data, next, prev){
        this.data = data;
        this.next = next || null;
        this.prev = prev || null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        //can maintain tail
        //can mantain numberOfNodes
    }
    add(data){
      // add at the end
      if(!this.head){
        this.head = new Node(data, null, null);
      }else{
        let current  = this.head;
        while(current.next){
          current = current.next; 
        }
        current.next = new Node(data, null, current);
      }
    }
    remove(data){
      //if no head, there is nothing to remove
      if(!this.head) return null;
      
      //if head matches, point head to the next node
      if(this.head.data === data){
        this.head = this.head.next;
        this.head.prev = null;
      }
      let current = this.head;
      while(current.next){
        if(current.data === data){
          current.next.prev = current.prev;
          current.prev.next = current.next;
        }
        current = current.next;
      }
      
      //if last element matches
      if(current.data === data){
        current.prev.next = null;  
      }
    }
    insertAfter(data, afterNodeData){
      //insert after a certain node
      if(!this.head) return;
      
      //insert after head
      if(this.head.data === afterNodeData){
        this.head.next = new Node(data, this.head.next, this.head);
        return;
      }
      let current = this.head;
      while(current.next){
        if(current.data === afterNodeData){
          current.next = new Node(data, current.next, current);
        }
        current = current.next;   
      }
      //insert at last position
      if(current.data === afterNodeData){
        current.next = new Node(data, null, counter);
      }
      
      
    }
    traverse(fn){
      //traverse the list
      if(!this.head) return;
      let current = this.head;
      while(current){
        fn(current);
        current = current.next;
      }
    }
    
    traverseReverse(fn){
      //traverse the list in reverse
      if(!this.head) return;
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      while(current){
        fn(current);
        current = current.prev;
      }
    }
    length(){
      //print number of nodes
      if(!this.head) return 0;
      if(!this.head.next) return 1;
      let current = this.head, counter = 0;
      while(current){
        counter++;
        current = current.next;
      }
      return counter;
    }
}

