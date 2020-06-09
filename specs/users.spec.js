import 'regenerator-runtime/runtime.js';
import axios from 'axios';
import chai from 'chai';
import { expect } from 'chai';
import * as data from '../data/test_data/user.js';
import * as options from '../data/apiOptions/options';

import {
  getAllUsersResponseSchema,
  getUserByIdResponseSchema,
} from '../data/schemas/user';

chai.use(require('chai-json-schema-ajv'));

describe('Test Users Endpoint', async () => {
  it('GET all users', async () => {
    const opt = options.options('GET', '/users');
    const response = await axios(opt);

    expect(response.status).to.equal(200);
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data).to.be.an('object');
    expect(response.data.result).to.be.jsonSchema(getAllUsersResponseSchema);
  });

  it('POST user', async () => {
    const opt = options.options('POST', '/users', data.POST_user_body);
    const response = await axios(opt);
    expect(response.status).to.equal(200);
  });

  it('GET users by Id', async () => {
    const opt = options.options('GET', '/users/1762');
    const response = await axios(opt);

    expect(response.status).to.equal(200);
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data).to.be.an('object');
    expect(response.data.result).to.be.jsonSchema(getUserByIdResponseSchema);
  });
});
