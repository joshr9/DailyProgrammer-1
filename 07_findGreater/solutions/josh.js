function findGreater(array) {
  var max = 0,
  a = array.length,
  counter

  for (counter = 0; counter < a; counter++) {
    if (array[counter] > max) {
      max = array[counter]
    }
  }
  return max
}

findGreater([1, 2, 3, 4, 5, 6, 7, 8, 9])
