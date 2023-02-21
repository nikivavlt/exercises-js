/*
Function applies the passed function to the argument n times.
*/

const apply = (n, f, arg) => (
  (n === 0) ? arg : apply(n - 1, f, f(arg))
);

apply(2, Math.sqrt, 16);
