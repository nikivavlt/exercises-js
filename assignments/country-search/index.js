import countryList from './countries';

function searchCountryBy(key, keyword) {
  let firstElement = 0;
  let lastElement = countryList.length - 1;

  while (firstElement <= lastElement) {
    const middleElement = Math.floor((firstElement + lastElement) / 2);

    if (countryList[middleElement][key] === keyword) return countryList[middleElement];

    if (countryList[middleElement][key] > keyword) {
      lastElement = middleElement - 1;
    }

    if (countryList[middleElement][key] < keyword) {
      firstElement = middleElement + 1;
    }
  }

  return `${keyword} don't exists in countryList`;
}

searchCountryBy('id', 130);
