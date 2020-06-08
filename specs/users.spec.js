import 'regenerator-runtime/runtime.js';
import axios from 'axios';
import chai from 'chai';
import { expect } from 'chai';
import * as POST_userData from '../data/test_data/POST_user.json';
import qs from 'qs';

import {
  getAllUsersResponseSchema,
  getUserByIdResponseSchema,
} from './schemas/user';

chai.use(require('chai-json-schema-ajv'));

var url;
process.env.NODE_ENV == 'LOCAL'
  ? (url = `${process.env.LOCAL_URL}/users`)
  : (url = `${process.env.BASE_URL}/users`);

const options = {
  method: 'GET',
  headers: { Authorization: `Bearer ${process.env.TOKEN}` },
  url,
};

describe('Test Users Endpoint', async () => {
  xit('GET all users', async () => {
    const response = await axios(options);

    expect(response.status).to.equal(200);
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data).to.be.an('object');
    expect(response.data.result).to.be.jsonSchema(getAllUsersResponseSchema);
  });

  it('POST user', async () => {
    options.method = 'POST';
    options.data = qs.stringify(POST_userData);
    const response = await axios(options);
    console.log('resposne', response);
  });

  xt('GET users by Id', async () => {
    options.url = `${url}/1744`;
    const response = await axios(options);

    expect(response.status).to.equal(200);
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data).to.be.an('object');
    expect(response.data.result).to.be.jsonSchema(getUserByIdResponseSchema);
  });
});
