import axios from 'axios';

export const APIAuth = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  headers: { 'content-type': 'application/x-www-form-urlencoded' }
});
export const APINoAuth = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'authorization': ''
  }

});


export const setAuthorizationToken = (token) => {
  if (token) {
    APIAuth.defaults.headers.common['authorization'] = `Bearer ${token}`;
  } else {
    delete APIAuth.defaults.headers.common['authorization'];
  }
}