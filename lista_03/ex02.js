//2. Verificar se duas pilhas são iguais.
function pushElements(stack, stack2, len){
    let i = 1;
    while (i <= len){
        if(stack.length > 0){
            stack2.push(stack[stack.length - 1]);
            stack.pop();
        }
        i++;
    }
}

function compareStacks(stack, stack2){
    var stk1 = stack.length;
    var stk2 = stack2.length;

    if (stk1 != stk2) {
        return "No";
    }
 
    for (var i = 1; i <= stk1; i++) {
 
        pushElements(stack, stack2, stk1 - i);

        var valMax = stack[stack.length-1];
    
        pushElements(stack2, stack, 2 * (stk1 - i));
 
        if (valMax != stack2[stack2.length-1])
            return "No";
 
        pushElements(stack, stack2, stk1 - i);
    }
 
    return "Yes";
}
stack = [];
stack2 = [];

stack.push(1);
stack.push(3);
stack.push(6);

stack2.push(1);
stack2.push(3);
stack2.push(6);

console.log(compareStacks(stack, stack2));
