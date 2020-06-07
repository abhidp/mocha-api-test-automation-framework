import 'regenerator-runtime/runtime.js';
import axios from 'axios';
import { expect } from 'chai';
const token = process.env.TOKEN;
const baseUrl = process.env.BASE_URL;

describe('Users', async () => {
  it('GET all users', async () => {
    const response = await axios({
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
      url: `${baseUrl}/users`,
    });

    console.log('RESPONSE===', response.data.result[0]);

    expect(response.status).to.equal(200);
  });
});
