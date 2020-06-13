const fs = require('fs');
const data = require('../data/mocks/resetDb.json');
fs.writeFileSync('./data/mocks/db.json', JSON.stringify(data), (error) => {
    if (error)
        throw error;
    console.log('Data written to file');
});
//# sourceMappingURL=resetDb.js.map