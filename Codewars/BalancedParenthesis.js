function checkParenth(str){

    // declare a stack which holds the opening parenthesis
     let stack = []; 
    //  store a key pair value for the parenthesos
    let map ={
            '(':')',
            '[':']',
            '{':'}'
    }
// declare a for loop to loop through the string
    for (let i = 0; i< str.length; i++){
        if(str[i] === '(' || str[i] === '[' || str[i] === '{'){
            // push to the stack if a left parenthesis is found
            stack.push(str[i]);
        }else{
            // pop from the stack if right parenthesis found
           let lastEl = stack.pop();
        //    check if the popped element is equal to the matching starting bracket
           if(str[i] !== map[lastEl]){
               return false;
           }
        }
    }

    if (stack.length === 0){
        return true;
    }
    return false;
}    let map ={
    '(':')',
    '[':']',
    '{':'}'
}
console.log(checkParenth('(())]{}]')) //expected false
console.log(checkParenth('(())')) //expected true