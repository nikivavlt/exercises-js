/*
Selection sort is a basic algorithm that takes the first element of the collection
as the smallest and compares it with other elements, if there is an element less
than the first one at the end of search, it puts this element at the beginning.
During the next iteration, the loop excludes the first element from the search
and takes the next one.
*/

const selectionSort = (arrayOfElements) => {
  const sortedArray = [...arrayOfElements];

  for (let limit = 0; limit < sortedArray.length - 1; limit += 1) {
    let smallestElIndex = limit;

    for (let i = limit + 1; i < sortedArray.length; i += 1) {
      if (sortedArray[smallestElIndex] > sortedArray[i]) smallestElIndex = i;
    }

    const temporaryElement = sortedArray[limit];
    sortedArray[limit] = sortedArray[smallestElIndex];
    sortedArray[smallestElIndex] = temporaryElement;
  }

  return sortedArray;
};

const numbers = [4, 7, 5, 10, 1, 6, 9, 3, 8, 2];

selectionSort(numbers);
