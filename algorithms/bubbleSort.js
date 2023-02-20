/*
Bubble sort - basic algorithm that compares two elements (first, second) and, if
the first is larger, changes the positions of the elements. Therefore, after each
iteration, the largest element of the collection will be at the end of the array.
*/

const bubbleSort = (arrayOfElements) => {
  const sortedArray = [...arrayOfElements];

  for (let limit = arrayOfElements.length - 1; limit > 0; limit -= 1) {
    for (let i = 0; i < limit; i += 1) {
      if (sortedArray[i] > sortedArray[i + 1]) {
        const temporaryElement = sortedArray[i];

        sortedArray[i] = sortedArray[i + 1];
        sortedArray[i + 1] = temporaryElement;
      }
    }
  }

  return sortedArray;
};

const numbers = [10, 8, 3, 4, 1, 6, 9, 5, 7, 2];

bubbleSort(numbers);
