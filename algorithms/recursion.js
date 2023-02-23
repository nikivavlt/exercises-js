/*
Recursion - function calls itself internally.
For example, on the calculation of the factorial of the number.
*/

const recursion = (number) => {
  if (number < 0) return 'Wrong number.';

  return (number === 0) ? 1 : number * recursion(number - 1);
};

recursion(7);
