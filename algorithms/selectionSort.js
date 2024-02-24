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


/*
Second implementation of the algorithm
-
function findLargerAmount(array) {
  let currentLargerAmount = 0;
  let largestElementId = {};

  array.forEach(element => {
    if (currentLargerAmount < element.amount) {
      currentLargerAmount = element.amount;
      largestElementId  = array.indexOf(element);
    }
  });

  return largestElementId;
}

const selectionSort = (array) => {
  const initialArray = [...array];
  const sortedArray = [];

  array.forEach((element) => {
    const largestElementId = findLargerAmount(initialArray);
    
    sortedArray.push(initialArray[largestElementId]);
    initialArray.splice(largestElementId, 1);
  });

  return sortedArray;
};

const data = [
  { name: 'Ireland', amount: 32 },
  { name: 'Lithuania', amount: 45 },
  { name: 'Sweden', amount: 403 },
  { name: 'Russia', amount: 20 },
  { name: 'German', amount: 95 },
  { name: 'USA', amount: 139 },
  { name: 'Canada', amount: 288 },
];
*/
