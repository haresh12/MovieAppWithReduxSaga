// General api to access data
import ApiConstants from './ApiConstants';
export default function api(path, params, method, token) {
  let options;
  options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && { token: token }),
    },
    method: method,
    ...(params && { body: JSON.stringify(params) }),
  };
  console.log("Body: "+JSON.stringify(params))
  console.log("path"+path)
  return fetch(path, options)
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => error);
}
