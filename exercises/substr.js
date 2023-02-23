/*
substr() method analogy. Function returns a portion of the string,
starting at the specified index and extending for a given number of characters afterwards.
*/

const substr = (string, index = 0, length = string.length) => {
  let firstIndex = index;

  if (index < 0) firstIndex = 0;

  let lastIndex = length - 1 + firstIndex;

  if (length < 0) lastIndex = firstIndex;
  if (firstIndex > lastIndex) return '';
  if (length === 0) return '';

  if (lastIndex > string.length) lastIndex = string.length - 1;

  let answer = '';
  for (let i = firstIndex; i <= lastIndex; i += 1) {
    answer += string[i];
  }

  return answer;
};

substr('cutthisstring', -1, 3);
