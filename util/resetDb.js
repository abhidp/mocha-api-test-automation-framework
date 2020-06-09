const fs = require('fs');

const data = require('../data/mocks/resetDb.json');

fs.writeFileSync('./data/mocks/db.json', JSON.stringify(data), (err) => {
  if (err) throw err;
  console.log('Data written to file');
});
