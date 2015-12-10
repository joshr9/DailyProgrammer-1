function anagram(string1, string2){
  string1 = string1.split("").sort().join("");
  string2 = string2.split("").sort().join("");
  if (string1 === string2){
    return true;
  } else { 
    return false;
  }
};

console.log(anagram("examples", "maxeples"));
console.log(anagram("maple", "apmel"));
console.log(anagram("male", "apmel"));

