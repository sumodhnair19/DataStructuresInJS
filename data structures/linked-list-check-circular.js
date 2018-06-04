import SinglyLinkedList from './singly-linked-list';

function checkCircular(linkedList){
    let slow = linkedList.getFirst(),
        fast = linkedList.getFirst();

    while(fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        
        if(slow === fast){
            return true;
        }
    }
    return false;
}


let linkedList = new SinglyLinkedList();
linkedList.insertAt(0, 10);
linkedList.insertAt(1, 11);
linkedList.insertAt(2, 12);
linkedList.insertAt(3, 13);
linkedList.insertAt(4, 14);
linkedList.insertAt(5, 15);

linkedList.print();

//adding a loop in ll
let a = linkedList.getAt(5);
a.next = linkedList.getAt(2);

checkCircular(linkedList);