import 'regenerator-runtime/runtime.js';
import axios from 'axios';
import chai from 'chai';
import { expect } from 'chai';
import * as data from '../data/test_data/user.js';
import * as options from '../data/apiOptions/options';

import {
  getAllUsersResponseSchema,
  getUserByIdResponseSchema,
  postUserResponseSchema,
} from '../data/schemas/user';

chai.use(require('chai-json-schema-ajv'));

describe('Test Users Endpoint', async () => {
  var userId;

  it('GET all users', async () => {
    const config = options.options('GET', '/users');
    const response = await axios(config);

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data.result).to.be.jsonSchema(getAllUsersResponseSchema);
  });

  it('POST user', async () => {
    const config = options.options('POST', '/users', data.POST_user_body);
    const response = await axios(config);
    userId = response.data.result.id;

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data.result).to.be.jsonSchema(postUserResponseSchema);
  });

  it('GET user by Id', async () => {
    const config = options.options('GET', `/users/${userId}`);
    const response = await axios(config);

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data.result).to.include(data.POST_user_body);
    expect(response.data.result).to.be.jsonSchema(getUserByIdResponseSchema);
  });

  it('PUT user by Id', async () => {
    const config = options.options(
      'PUT',
      `/users/${userId}`,
      data.PUT_user_body
    );
    const response = await axios(config);

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data.result).to.include(data.PUT_user_body);
    expect(response.data.result).to.be.jsonSchema(postUserResponseSchema);
  });

  it('DELETE user by Id', async () => {
    const config = options.options('DELETE', `/users/${userId}`);
    const response = await axios(config);

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data.result).to.be.null;
  });
});
