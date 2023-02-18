/*
Function finds all anagrams of initial word from the given array of words
and outputs a new array of anagrams.
*/

const filterAnagrams = (initialWord, arrOfWords) => {
  const standardize = (word) => word.split('').sort().join('');

  return arrOfWords.filter((currentWord) => standardize(currentWord) === standardize(initialWord));
};

filterAnagrams('education', ['cautioned', 'comfortable', 'auctioned', 'educated']);
