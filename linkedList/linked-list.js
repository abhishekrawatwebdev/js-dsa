class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }
  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;
    let currEle = this.head;
    for (let i = 0; i < index; i++) {
      currEle = currEle.next;
    }
    return currEle;
  }

  print() {
    let output = "";
    let currEle = this.head;
    while (currEle) {
      output = `${output}${currEle.value} -> `;
      currEle = currEle.next;
    }
    console.log(`${output}null`);
  }
  insertAtIndex(index, value) {
    if(index === 0) return this.insertAtHead(value)

    const prevEle = this.getByIndex(index-1)
    if(prevEle === null) return null

    prevEle.next = new LinkedListNode(value, prevEle.next)
    this.length++
  }

  removeHead () {
    this.head = this.head.next
    this.length--
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
LinkedList.fromValues = function (...values) {
  const linkedList = new LinkedList();
  for (let i = values.length; i >= 0; i--) {
    linkedList.insertAtHead(values[i]);
  }
  return linkedList;
};

module.exports = LinkedList;
