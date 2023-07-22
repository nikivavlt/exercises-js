const axios = require('axios');

const fetchData = async (url) => {
  const response = await axios.get(url);

  return [
    response.data.submissionUrl,
    response.data.sheets,
  ];
};

const postData = async (url, answer) => {
  const response = await axios.post(url, answer);

  console.log(response);
};

module.exports = { fetchData, postData };
