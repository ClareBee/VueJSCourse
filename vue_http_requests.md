### HTTP requests
`npm install vue-resource`
add plugin in main.js:
import VueResource from 'vue-resource';
Vue.use(VueResource);

=> gives global access to `this.$http.get()` etc
e.g. this.$http.post(url.json) (for Firebase)
- uses Promises
