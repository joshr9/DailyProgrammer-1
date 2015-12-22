function gameOfThrees(number) {
  console.log(number);
  while (number > 1) {
    if (number % 3 === 0) {
      console.log(number / 3);
      number = number / 3;
    } else if (number % 3 > 1) {
      console.log(number + 1);
      number = number + 1;
    } else if (number % 3 === 1) {
      console.log(number - 1);
      number = number - 1;
    }
  }
}

gameOfThrees(5000)
