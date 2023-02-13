/*
The "happy" ticket is one in which sum of digits in first half equal to the second half.
Numbers can be of arbitrary length, with the only condition.
that the number of digits is always even (Example: 33, 2341, 123456 and etc..).
*/

const sumDigits = (number) => {
  let answer = 0;

  for (let i = 0; i < number.length; i += 1) {
    answer += Number(number[i]);
  }

  return answer;
};

const isHappyTicket = (string) => {
  if (string.length % 2 === 0) {
    const firstPart = string.slice(0, (string.length / 2));
    const secondPart = string.slice((string.length / 2), string.length);

    return sumDigits(firstPart) === sumDigits(secondPart);
  }

  return 'Wrong number';
};

isHappyTicket('5344');
