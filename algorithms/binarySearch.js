/*
Binary search - basic algorithm that checks if a particular array
includes the element that was passed to the function. After each iteration,
the search area is halved. Array elements must be ordered (sorted) before searching.
*/

const binarySearch = (array, element) => {
  const firstIndex = 0;
  const middleIndex = Math.floor(array.length / 2);

  if (array[middleIndex] === element) return true;

  if (array[middleIndex] > element) {
    return binarySearch(array.slice(firstIndex, middleIndex), element);
  }

  if (array[middleIndex] < element) {
    return binarySearch(array.slice(middleIndex + 1, array.length), element);
  }

  return false;
};

const listOfElements = ['factory', 'grocery', 'hospital', 'house', 'restaurant', 'shop', 'sport center'];

binarySearch(listOfElements, 'shop');
