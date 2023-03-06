/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/*
Predicate function receives a set of symbols and the initial string.
After function determine whether it is possible to construct the original string
from a set of symbols or no.
*/

const isPossibleConstruct = (set, initialWorld) => {
  const normalize = (world) => world.toLowerCase();

  const setOfLetters = normalize(set).split('');

  const test = normalize(initialWorld)
    .split('')
    .filter((letter) => {
      if (setOfLetters.includes(letter)) {
        setOfLetters.splice(setOfLetters.indexOf(letter), 1);
        return letter;
      }
    })
    .join('');

  return (test === normalize(initialWorld));
};

isPossibleConstruct('scriptjava', 'javascript');
