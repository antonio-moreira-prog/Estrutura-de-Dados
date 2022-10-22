function Stack(length = 10){
    let item = [];
    item[length - 1] = undefined;
    let next = 0;

    this.push = function (element){
        item.push(element);
        item[next] = element;
        next++;
    }
    this.peek = function(){
        return item[length - 1];
    }
    this.print = function () {
        console.log(this.toString());
    }
    this.toString = function () {
        let str = '';
        for (let i = next - 1; i >= 0; i--) {
            str += item[i] + '\n';
        }
        return str;

    };

}
const stack = new Stack();
stack.push(6);
stack.push(10);
stack.push(19);
stack.print();
console.log('Elemento do topo da pilha ' + stack.peek());