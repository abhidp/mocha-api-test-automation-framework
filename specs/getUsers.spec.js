import 'regenerator-runtime/runtime.js';
import axios from 'axios';
import { expect } from 'chai';
const token = process.env.TOKEN;
const baseUrl = process.env.BASE_URL;
const headers = { Authorization: `Bearer ${token}` };

describe('Test Users Endpoint', async () => {
  it('GET all users', async () => {
    const response = await axios({
      method: 'GET',
      headers,
      url: `${baseUrl}/users`,
    });

    expect(response.status).to.equal(200);
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data).to.be.an('object');
    expect(response.data.result).to.be.an('array');
  });

  it('GET users by Id', async () => {
    const response = await axios({
      method: 'GET',
      headers,
      url: `${baseUrl}/users/1744`,
    });

    expect(response.status).to.equal(200);
    expect(response.headers['content-type']).to.contain('application/json');
    expect(response.data).to.be.an('object');
    expect(response.data.result).to.be.an('object');
    expect(response.data.result).to.include.keys(
      'id',
      'first_name',
      'gender',
      'dob',
      'email',
      'phone',
      'website',
      'address',
      'status'
    );
  });
});
