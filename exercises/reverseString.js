/*
Function reverses a string using recursion.
*/

const reverse = (string) => (
  string.length === 0
    ? string
    : `${string.slice(-1)}${reverse(string.slice(0, -1))}`
);

reverse('function test');
