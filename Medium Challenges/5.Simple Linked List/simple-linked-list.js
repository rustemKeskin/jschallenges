class Element {
    constructor(datum, next = null) {
      this.datum = datum;
      this.next = next;
    }
  
    datum() {
      return this.datum;
    }
  
    isTail() {
      return this.next === null;
    }
  
    next() {
      return this.next;
    }
  }
  
class SimpleLinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    size() {
      return this.size;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    push(datum) {
      const newElement = new Element(datum, this.head);
      this.head = newElement;
      this.size++;
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      const popped = this.head;
      this.head = this.head.next();
      this.size--;
      return popped.datum();
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.head.datum();
    }
  
    head() {
      return this.head;
    }
  
    static fromArray(array) {
      const list = new SimpleLinkedList();
      for (let i = array.length - 1; i >= 0; i--) {
        list.push(array[i]);
      }
      return list;
    }
  
    toArray() {
      const array = [];
      let current = this.head;
      while (current !== null) {
        array.push(current.datum());
        current = current.next();
      }
      return array;
    }
  
    reverse() {
      let current = this.head;
      let prev = null;
      let next = null;
      while (current !== null) {
        next = current.next();
        current.next = prev;
        prev = current;
        current = next;
      }
      this.head = prev;
    }
}
  
module.exports = { SimpleLinkedList, Element };
  