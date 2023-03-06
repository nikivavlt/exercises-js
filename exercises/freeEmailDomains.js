/*
The function takes a list of emails and returns the number of emails
that are registered on free domains.
The list of free domains is stored in the freeEmailDomains constant.
*/

const emails = [
  'info@gmail.com',
  'info@yahoo.com',
  'info@hotmail.com',
  'mk@host.com',
  'support@special.com',
  'key@proton.com',
  'andrey@gmail.com',
  'john@gmail.com',
  'piter@hotmail.com',
];

const freeEmailDomains = [
  'gmail.com',
  'hotmail.com',
  'yahoo.com',
];

const getFreeDomains = (emailsList) => {
  let answer = {};
  emailsList.reduce((acc, email) => {
    const domain = email.split('@').pop();
    freeEmailDomains.map((freeEmailDomain) => {
      if (freeEmailDomain === domain) {
        if (!acc[domain]) {
          acc[domain] = 0;
        }
        acc[domain] += 1;
      }
      return acc[domain];
    });
    answer = acc;
    return acc;
  }, {});
  return answer;
};

getFreeDomains(emails);
