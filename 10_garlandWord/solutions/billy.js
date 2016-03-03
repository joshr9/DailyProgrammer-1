function garland(word1){
  if (word1 === arguments[1]) return word1.length;
  var word2 = arguments[1] || word1;
  return garland(word1.substr(0, word1.length - 1), word2.substr(1));
}

console.log(garland('programmer')) //0
console.log(garland('ceramic')) //1
console.log(garland('onion')) //2
console.log(garland('alfalfa')) //4
console.log(garland('hotshots')) //4
console.log(garland('abracadabra')) //4
console.log(garland('couscous')) //4
