import { fetch } from 'whatwg-fetch';
import { API_URL } from './Config';

const Module = ({ url }) => (endpoint) => (params) => {
  return fetch(url + endpoint, {
    ...params,
  })
  .then(res => {
    return res.json()
  });
}

const Comm = Module({
  url: API_URL.HUOBI,
})

export { Comm, Module }