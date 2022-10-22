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
    };
}
const stack = new Stack();


stack.push(2);
stack.push(3);
stack.push(10);
stack.push(54);
stack.print();
console.log('Elemento do topo da pilha ' + stack.peek());

console.log('Elemento removido da pilha ' + stack.pop());