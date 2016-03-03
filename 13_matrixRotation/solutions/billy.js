
function matrixTransform(matrix1){
  console.log("matrix1 = " + matrix1[0].length + "x" + matrix1.length);
  var matrix2 = [];
  for(column = 0; column < matrix1[0].length; column++){
    matrix2.push([]);
    for(row = matrix1.length - 1; row > -1; row--){
      matrix2[column].push(matrix1[row][column]);
    }
  }
  return matrix2;
}

console.log(matrixTransform([[1, 64, 23],
              [22, 50, 2]]));
