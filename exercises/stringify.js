/*
An alternative to the JSON.stringify() function. But with the following differences:
1. Keys and string values without quotes.
2. String (line) end with the value itself, without a comma. 
*/

const isNotObject = (data) => (typeof data !== 'object' || data === null);

const stringify = (value, replacer = ' ', spacesCount = 1) => {
  const makeString = (currentValue, depth) => {
    if (isNotObject(currentValue)) return `${currentValue}`;

    const spaceSize = spacesCount * depth;
    const space = replacer.repeat(spaceSize);
    const bracketSpace = replacer.repeat(spaceSize - spacesCount);
    const string = Object
      .entries(currentValue)
      .map(([key, val]) => `${space}${key}: ${makeString(val, depth + 1)}`);

    return [
      '{',
      ...string,
      `${bracketSpace}}`,
    ].join('\n');
  };

  return makeString(value, 1);
};

const nested = {
  string: 'value',
  boolean: true,
  number: 5,
  float: 1.25,
  object: {
    5: 'number',
    1.25: 'float',
    null: 'null',
    true: 'boolean',
    value: 'string',
    nested: {
      boolean: true,
      float: 1.25,
      string: 'value',
      number: 5,
      null: null,
    },
  },
};

console.log(stringify(nested));
