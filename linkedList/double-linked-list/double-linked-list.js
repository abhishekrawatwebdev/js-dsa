class DoubleNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtEnd(data) {
    const newNode = new DoubleNode(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insertAtHead(data) {
    const newNode = new DoubleNode(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  delete(data) {
    if (!this.head) return;

    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current.prev) current.prev.next = current.next;
        if (current.next) current.next.prev = current.prev;

        if (current === this.head) this.head = current.next;
        if (current === this.tail) this.tail = current.prev;

        return;
      }
      current = current.next;
    }
  }

  printList() {
    let output = "";
    let currEle = this.head;
    while (currEle) {
      output = `${output}${currEle.data} \t -> `;
      currEle = currEle.next;
    }
    console.log(`${output}null`);
  }

  printListReverse() {
    let current = this.tail;
    while (current) {
      console.log(current.data);
      current = current.prev;
    }
  }
}

module.exports = DoublyLinkedList;