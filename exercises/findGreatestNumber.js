function findGreatestNumber(arrayOfNumbers) {
  return arrayOfNumbers
    .reduce((accumulator, element) =>
      accumulator < element
        ? element
        : accumulator,
    arrayOfNumbers[0],
    );
}

const numbers = [5, 8, 623, 970, 666, 123, 321, 984, 4, 0];

findGreatestNumber(numbers);
