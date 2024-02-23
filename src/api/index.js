import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://testsh.alphasoft.com.ve/api-test-notes',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;