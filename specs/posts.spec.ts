import 'regenerator-runtime/runtime.js';
const axios = require('axios').default;
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
  let postId: string, post_data: Object;
  it('GET all posts', async () => {
    const config: Object = options.options('GET', '/posts');
    const response = await axios(config);
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data.result).to.be.jsonSchema(getAllPostsResponseSchema);
  });

  it('POST post', async () => {
    post_data = await data.POST_post_body();
    const config: Object = options.options('POST', '/posts', post_data);
    const response = await axios(config);
    postId = response.data.result.id;

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data.result).to.be.jsonSchema(postPostsResponseSchema);
  });

  it('GET user by Id', async () => {
    const config: Object = options.options('GET', `/posts/${postId}`);
    const response = await axios(config);

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data.result).to.include(post_data);
    expect(response.data.result).to.be.jsonSchema(getPostByIdResponseSchema);
  });

  it('PUT user by Id', async () => {
    const put_data = await data.PUT_post_body();
    const config: Object = options.options('PUT', `/posts/${postId}`, put_data);
    const response = await axios(config);

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data.result).to.include(put_data);
    expect(response.data.result).to.be.jsonSchema(putPostsResponseSchema);
  });

  it('DELETE user by Id', async () => {
    const config: Object = options.options('DELETE', `/posts/${postId}`);
    const response = await axios(config);

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data.result).to.be.null;
  });
});
