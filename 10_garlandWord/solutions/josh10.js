function garland(string) {
  var count = 0;
  for (i = 0; i < string.length; i++) {
    if (i !== count) {
      if (string.charAt(i) === string.charAt(count)) {
        count++;
      } else {
        count = 0;
      }
    }
  }
  return count;
}
