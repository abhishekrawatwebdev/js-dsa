const DoublyLinkedList =  require('./double-linked-list');

const myList = new DoublyLinkedList();
myList.insertAtEnd(1);
myList.insertAtEnd(2);
myList.insertAtEnd(3);
myList.insertAtHead(0);
myList.delete(2);
myList.printList();
myList.printListReverse();