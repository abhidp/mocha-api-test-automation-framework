import 'regenerator-runtime/runtime.js';
import axios from 'axios';
import chai from 'chai';
import { expect } from 'chai';
import * as data from '../data/test_data/posts';
import * as options from '../data/api_config/options';

import {
  getAllPostsResponseSchema,
  postPostsResponseSchema,
  getPostByIdResponseSchema,
  putPostsResponseSchema,
} from '../data/schemas/posts';

chai.use(require('chai-json-schema-ajv'));

describe('Test Posts Endpoint', async () => {
  let postId: string;
  let postData: object;
  it('GET all posts', async () => {
    const config: object = options.options('GET', '/posts');
    const response = await axios(config);
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data.result).to.be.jsonSchema(getAllPostsResponseSchema);
  });

  it('POST post', async () => {
    postData = await data.PostPostsBody();
    const config: object = options.options('POST', '/posts', postData);
    const response = await axios(config);
    postId = response.data.result.id;

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data.result).to.be.jsonSchema(postPostsResponseSchema);
  });

  it('GET user by Id', async () => {
    const config: object = options.options('GET', `/posts/${postId}`);
    const response = await axios(config);

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data.result).to.include(postData);
    expect(response.data.result).to.be.jsonSchema(getPostByIdResponseSchema);
  });

  it('PUT user by Id', async () => {
    const putData = await data.PutPostsBody();
    const config: object = options.options('PUT', `/posts/${postId}`, putData);
    const response = await axios(config);

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data.result).to.include(putData);
    expect(response.data.result).to.be.jsonSchema(putPostsResponseSchema);
  });

  it('DELETE user by Id', async () => {
    const config: object = options.options('DELETE', `/posts/${postId}`);
    const response = await axios(config);

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data.result).to.be.null;
  });
});
