const LinkedList = require('./linked-list');

const linkedList = LinkedList.fromValues(12,22,32,42)

console.log('------------print-------------');
linkedList.print()
console.log('-------------------------\n');
console.log('------------insert at index-------------');
linkedList.insertAtIndex(1, 0o0)
linkedList.print()
console.log('-------------------------\n');

console.log('------------removed head-------------');
linkedList.removeHead()
linkedList.print()
console.log('-------------------------\n');

// console.log(linkedList.getByIndex(0));