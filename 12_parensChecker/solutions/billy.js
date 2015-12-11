function parensChecker(parens){
  var answer = parens.split("");
  var parensCount = 0;
  if(answer[0] != "(") return false;
  for (i = 0; i < parens.length; i++){
    if(answer[i] === "(") parensCount++;
    if(answer[i] === ")") parensCount--;
    if(parensCount < 0) return false;
  };
  if (parensCount === 0){
    return true;
  } else {
    return false;
  }
}

console.log(parensChecker("()(((())))"));
console.log(parensChecker("())))("));
console.log(parensChecker(")("));
console.log(parensChecker("())(()"));


