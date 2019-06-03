import 'regenerator-runtime/runtime.js';
import axios from 'axios';
import chai from 'chai';
import { expect } from 'chai';
import {
  getAllUsersResponseSchema,
  getUserByIdResponseSchema,
} from './schemas/user';

chai.use(require('chai-json-schema-ajv'));

const url = `${process.env.BASE_URL}/users`;
const options = {
  method: 'GET',
  headers: { Authorization: `Bearer ${process.env.TOKEN}` },
  url,
};

describe('Test Users Endpoint', async () => {
  it('GET all users', async () => {
    const response = await axios(options);

    expect(response.status).to.equal(200);
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data).to.be.an('object');
    expect(response.data.result).to.be.jsonSchema(getAllUsersResponseSchema);
  });

  it('GET users by Id', async () => {
    options.url = `${url}/1744`;
    const response = await axios(options);

    expect(response.status).to.equal(200);
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data).to.be.an('object');
    expect(response.data.result).to.be.jsonSchema(getUserByIdResponseSchema);
  });
});
