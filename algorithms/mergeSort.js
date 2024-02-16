const mergeAndSort = (firstArray, secondArray) => {
  const sortedArray = [];

  while (firstArray.length && secondArray.length) {
    sortedArray.push(
      (firstArray[0] < secondArray[0])
        ? firstArray.shift()
        : secondArray.shift(),
    );
  }

  return [
    ...sortedArray,
    ...firstArray,
    ...secondArray,
  ];
};

const mergeSort = (array) => {
  if (array.length === 1) return array;

  const mid = Math.floor(array.length / 2);
  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid);

  return mergeAndSort(mergeSort(leftArray), mergeSort(rightArray));
};

const dataArray = [2, 1, 9, 6, 5, 3];

console.log(mergeSort(dataArray));
