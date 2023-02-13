/*
The "Happy" number is one that, as a result of a series.
of transformations of the form "sum of squares of digits", will turn into one.
Maximum 10 transformations (iterations).
*/

const sumOfSquareDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < numAsStr.length; i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

const isHappyNumber = (number) => {
  let currentNumber = number;

  for (let i = 0; i <= 10; i += 1) {
    currentNumber = sumOfSquareDigits(currentNumber);

    if (currentNumber === 1) return true;
  }

  return false;
};

isHappyNumber(7);
