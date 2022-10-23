/*
1. Crie uma pilha estática
*/

function Stack(length = 10){
    let item = [];
    item[length - 1] = undefined;
    let next = 0;

    //Empilhar
    this.push = function (element){
        if(!this.isFull()){
            item.push(element);
            item[next] = element;
            next++;
        }else{
            console.log("A Stack está cheia.");
        }
        
    }
    //Verificar se a stack está cheia.
    this.isFull = function (){
        return next == length;
    }
    
    //Desempilhar
    this.pop = function () {
        return item.pop();
    }

    //Olhar topo da pilha
    this.peek = function(){
        return item[next - 1];
    }
    
    //Imprimir pilha
    this.print = function () {
        console.log(this.toString());
    }
    //Exibir em formato de uma String
    this.toString = function () {
        let str = '';
        for (let i = next - 1; i >= 0; i--) {
            str += item[i] + '\n';
        }
        return str;
    }
    this.size = function () {
        return item.length;
    }
    
}

const stack = new Stack();
const stack2 = new Stack();

stack.push(2);
stack.push(3);
stack.push(11);
stack.push(54);
stack.print();

console.log('Elemento do topo da pilha ' + stack.peek());

console.log('Elemento removido da pilha ' + stack.pop());


console.log("Segunda Pilha");

stack2.push(2);
stack2.push(3);
stack2.push(10);
stack2.push(54);
stack2.print();

console.log('Elemento do topo da pilha ' + stack2.peek());

console.log('Elemento removido da pilha ' + stack2.pop());


