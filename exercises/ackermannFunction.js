const ackermannFunction = (a, b) => {
  if (a === 0) return b + 1;

  if (b === 0) return ackermannFunction(a - 1, 1);

  return ackermannFunction(a - 1, ackermannFunction(a, b - 1));
};

ackermannFunction(2, 3);
