require('dotenv').config();
import qs from 'qs';
var url, data;

export const userURL = (path) => {
  process.env.NODE_ENV == 'LOCAL'
    ? (url = `${process.env.LOCAL_URL}`)
    : (url = `${process.env.BASE_URL}`);

  return `${url}${path}`;
};

const headers = {
  Authorization: `Bearer ${process.env.TOKEN}`,
};

export function options(method, path, data) {
  return {
    method,
    url: userURL(path),
    headers,
    data: qs.stringify(data),
  };
}
