class Stack {
  constructor() {
    this.top = null;
    this.count = 0;
  }
  GetCount = function () {
      return this.count;
    };
    Peek = function () {
      if (this.top) {
        return this.top.data;
      }
      return null;
    };
    Push = function (data) {
      let node = {
        data: data,
        next: null
      };
      node.next = this.top;
      this.top = node;
      this.count++;
    };
    Pop = function () {
      if (this.top) {
        let out = this.top;
        this.top = this.top.next;
        if (this.count > 0) {
          this.count--;
        }
        return out.data;
      }
      return null;
    };
    DisplayAll = function () {
      if (this.top) {
        let arr = new Array();
        let current = this.top;
        for (let i = 0; i < this.count; i++) {
          arr[i] = current.data;
          current = current.next;
        }
        return arr;
      }
      return null;
    };
}

let stack = new Stack();
console.log(`Contagem: ${stack.GetCount()}`);
stack.Push(4);
console.log(`Peek: ${stack.Peek()}`);
console.log(`Contagem: ${stack.GetCount()}`);
stack.Push(22);
console.log(`Contagem: ${stack.GetCount()}`);
console.log(`Pop: ${stack.Pop()}`);
console.log(`Pop: ${stack.Pop()}`);
console.log(`Pop: ${stack.Pop()}`);
console.log(`Contagem: ${stack.GetCount()}`);
stack.Push(1);
stack.Push(-2);
stack.Push(100);
stack.Push(350);
console.log(`Todos: ${stack.DisplayAll()}`);