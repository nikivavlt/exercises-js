/*
The function calculates positive Fibonacci numbers.
Function argument is the serial number of Fibonacci number,
the numbering of Fibonacci numbers in the sequence starts from zero.
*/

const fibonacciNumber = (index) => {
  if (index === 1) return 1;
  if (index === 0) return 0;

  return fibonacciNumber(index - 1) + fibonacciNumber(index - 2);
};

fibonacciNumber(10);
