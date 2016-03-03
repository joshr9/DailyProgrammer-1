function calculateRPN(string){
  var stack = string.split(" ");
  var answer = [];  
  for (i = 0; i < stack.length; i++){
    var a, b;
    if(Number.isInteger(parseInt(stack[i]))){
      answer.push(parseInt(stack[i]))
    } else {
      a = parseInt(answer.pop());
      b = parseInt(answer.pop());
      switch(stack[i]){
        case '+':
          answer.push(a + b);
        break;
        case '-':
          answer.push(b - a);
        break;
        case 'x':
          answer.push(a * b);
        break;
        case '*':
          answer.push(a * b);
        break;
      }
    }
  }  

return answer;
}

console.log(calculateRPN('5 1 2 + 4 x + 3 -')) //14
console.log(calculateRPN('1 2 + 4 5 6 8 * - + +')) //-36
