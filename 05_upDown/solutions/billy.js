function upDown(array){
  var answer = array.map(function(elem, index, array){
    if(elem < array[index + 1]){
      return "higher";
    } else if (elem === array[index + 1]){
      return "even";
    } else {
      return "lower";
    }
  });
  return answer.splice(0, answer.length - 1);
}

console.log(upDown([1,2,3,4]));
console.log(upDown([9,2,3,3]));
 
