import * as fs from 'fs';
import * as data from '../data/mocks/resetDb.json';

fs.writeFileSync('./data/mocks/db.json', JSON.stringify(data));
