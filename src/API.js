import axios from 'axios';

export const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: { 'content-type': 'application/json' }
  });

  export const APILOGIN = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }

  });