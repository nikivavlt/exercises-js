/* eslint-disable no-constant-condition */
/* eslint-disable no-param-reassign */
/*
Quick sort - basic algorithm that compares the leftmost element and the rightmost element,
and if they are not in the correct sequence, swaps them.
*/

const partition = (subArray, leftIndex, rightIndex, supportElement) => {
  while (true) {
    while (supportElement > subArray[leftIndex]) {
      leftIndex += 1;
    }

    while (supportElement < subArray[rightIndex]) {
      rightIndex -= 1;
    }

    if (leftIndex >= rightIndex) return rightIndex + 1;

    const temporary = subArray[leftIndex];
    subArray[leftIndex] = subArray[rightIndex];
    subArray[rightIndex] = temporary;
  }
};

const quickSort = (array, left = 0, right = array.length - 1) => {
  const length = right - left + 1;

  if (length < 2) return array;

  const newArray = array;
  const supportElement = array[left];

  const separatingElement = partition(newArray, left, right, supportElement);

  quickSort(newArray, left, separatingElement - 1);
  quickSort(newArray, separatingElement, right);

  return newArray;
};

const numbers = [10, 4, 8, 2, 1, 5, 3, 6, 7, 9];

quickSort(numbers);
