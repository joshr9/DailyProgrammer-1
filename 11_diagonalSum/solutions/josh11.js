function diagonalSum(array){
  var diagSum = 0;
  for(var row = 0; row < array.length; row++){
    diagSum += array[row][row]
  }
  return diagSum;
}
var square4 =

              [[1, 0, 0, 0],

              [0, 1, 0, 0],

              [0, 0, 1, 0],

              [0, 0, 0, 1]]

var square5 =

             [[2, 5, 1, 3, 9],

              [4, 1, 3, 0, 8],

              [1, 0, 9, 7, 6],

              [1, 7, 7, 3, 0],

              [3, 3, 8, 2, 4]]

diagonalSum(square4);
diagonalSum(square5);
