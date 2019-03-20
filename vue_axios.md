### Axios
import axios from 'axios';
axios.post(url, payload)
  .then(res => console.log(res))
  .catch(error => console.log(error))

in main.js = global settings
e.g.
axios.defaults.baseURL = 'http://example.com'
axios.defaults.headers.common['Authorization'] = 'abc'
axios.defaults.headers.get['Accepts'] = 'application/json'


Interceptors:
const requestInterceptor = axios.interceptors.request.use(config => {
  console.log('request', config);
  return config;
});
const responseInterceptor = axios.interceptors.response.use(res => {
  console.log('response', res);
  return res;
});

axios.interceptors.request.eject(requestInterceptor);
axios.interceptors.response.eject(responseInterceptor);
