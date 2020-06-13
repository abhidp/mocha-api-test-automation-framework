const fs = require('fs');
const data = require('../data/mocks/resetDb.json');

fs.writeFileSync('./data/mocks/db.json', JSON.stringify(data), (error: any) => {
  if (error) throw error;
  console.log('Data written to file');
});
