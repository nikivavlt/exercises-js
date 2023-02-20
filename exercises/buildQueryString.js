/*
The function sorts alphabetically and connects parameters passed through the object
into the query string.
*/

const buildQueryString = (listOfParametrs) => {
  const string = Object
    .entries(listOfParametrs)
    .sort()
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  return string;
};

const parametrs = { page: 5, tl: 'en', text: 'function' };

buildQueryString(parametrs);
