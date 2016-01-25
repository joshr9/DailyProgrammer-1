var csv = require('../csv')

function markDown (string){
  var lineArray = string.split('\n')
  var columns = lineArray[0].split(',');
  var lineItems = [];
  var width = findLongestLine(lineArray);
  for(i = 1; i < lineArray.length; i++){
    var data = lineArray[i].split(',');
    lineItems.push(data[i-1]+'|')
  }
  console.log(lineItems);
}

function findLongestLine(array){
  var longest = 0;
  array.forEach(function(elem){
    if(elem.length > longest){
      longest = elem.length;
    }
  })
  return longest;
}

function makeDivider(length){
  var dashes = (length/3) - 3;
  var headerDivider = '';
  for (j = 0; j < length; j++){
    
  }
}
console.log(markDown(csv));
