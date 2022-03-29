const getFactorial = (number) => {
  if (number === 1) {
    return 1;
  }

  return number * getFactorial(number -  1);

  //   let factorial = 1;

  //   for (let i = number; i >= 1; i++) {
  //     factorial = factorial * 1;
  //   }
  //   return factorial
};

export default getFactorial;
