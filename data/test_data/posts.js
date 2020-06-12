import axios from 'axios';
import * as options from '../api_config/options';
const config = options.options('GET', '/users');

export const POST_post_body = async () => {
  return {
    user_id: (await axios(config)).data.result[0].id,
    title: 'Create a new New Post',
    body: 'This endpoint creates a new post using the POST method',
  };
};

export const PUT_post_body = async () => {
  return {
    user_id: (await axios(config)).data.result[0].id,
    title: 'Edit the newly created Post',
    body: 'This endpoint edits the post using the PUT method',
  };
};

module.exports = {
  POST_post_body,
  PUT_post_body,
};
