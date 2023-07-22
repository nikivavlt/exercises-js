const { fetchData, postData } = require('./src/data-tools');
const { filterSheets } = require('./src/sheets-tools');

const hubUrl = 'https://www.wix.com/_serverless/hiring-task-spreadsheet-evaluator';

fetchData(`${hubUrl}/sheets`)
  .then((fetchedData) => {
    const postUrl = fetchedData[0];
    const sheets = fetchedData[1];

    const preparedData = filterSheets(sheets);

    const answer = {
      email: 'nikivavlt@gmail.com',
      results: preparedData,
    };

    postData(postUrl, answer);
  });
