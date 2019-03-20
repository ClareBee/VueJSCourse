import axios from 'axios';

const instance = axios.create({
  baseUrl: "https://jsonplaceholder.typicode.com/users"
});

instance.defaults.headers.common['somthing'] = 'something';

export default instance;
