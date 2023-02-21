/*
substr() method analogy. Function returns a portion of the string,
starting at the specified index and extending for a given number of characters afterwards.
* Rewrite
*/

const substr = (string, firstIndex = 0, length = string.length) => {
  if (firstIndex < 0) firstIndex = 0;

  if (length < 0) length = 1;

  if (firstIndex > length) return '';

  if ((firstIndex + length - 1) >= string.length) length = string.length - firstIndex;

  let answer = '';

  let amountOfSymbols = length;

  for (let i = firstIndex; amountOfSymbols > 0; i += 1) {
    answer += string[i];

    amountOfSymbols -= 1;
  }

  return answer;
};

substr('abba', 0, 1);
