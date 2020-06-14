import * as dotenv from 'dotenv';
dotenv.config();
import qs from 'qs';
let url;

export const userURL = (path: string) => {
  process.env.NODE_ENV === 'LOCAL'
    ? (url = `${process.env.LOCAL_URL}`)
    : (url = `${process.env.BASE_URL}`);

  return `${url}${path}`;
};

const headers = {
  Authorization: `Bearer ${process.env.TOKEN}`,
};

export function options(method: string, path: string, data: any = '') {
  return {
    method,
    url: userURL(path),
    headers,
    data: qs.stringify(data),
  };
}
