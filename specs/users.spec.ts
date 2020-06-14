import 'regenerator-runtime/runtime.js';
import axios from 'axios';
import chai from 'chai';
import { expect } from 'chai';
import * as data from '../data/test_data/users';
import * as options from '../data/api_config/options';

import {
  getAllUsersResponseSchema,
  getUserByIdResponseSchema,
  postUserResponseSchema,
} from '../data/schemas/users';

chai.use(require('chai-json-schema-ajv'));

describe('Test Users Endpoint', async () => {
  let userId: string;

  it('GET all users', async () => {
    const config: object = options.options('GET', '/users');
    const response = await axios(config);

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data.result).to.be.jsonSchema(getAllUsersResponseSchema);
  });

  it('POST user', async () => {
    const config: object = options.options(
      'POST',
      '/users',
      data.PostUsersBody
    );
    const response = await axios(config);
    userId = response.data.result.id;

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data.result).to.be.jsonSchema(postUserResponseSchema);
  });

  it('GET user by Id', async () => {
    const config: object = options.options('GET', `/users/${userId}`);
    const response = await axios(config);

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data.result).to.include(data.PostUsersBody);
    expect(response.data.result).to.be.jsonSchema(getUserByIdResponseSchema);
  });

  it('PUT user by Id', async () => {
    const config: object = options.options(
      'PUT',
      `/users/${userId}`,
      data.PutUsersBody
    );
    const response = await axios(config);

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data.result).to.include(data.PutUsersBody);
    expect(response.data.result).to.be.jsonSchema(postUserResponseSchema);
  });

  it('DELETE user by Id', async () => {
    const config: object = options.options('DELETE', `/users/${userId}`);
    const response = await axios(config);

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data.result).to.be.null;
  });
});
