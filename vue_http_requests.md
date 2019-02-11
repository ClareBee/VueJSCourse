### HTTP requests
`npm install vue-resource`
add plugin in main.js:
import VueResource from 'vue-resource';
Vue.use(VueResource);

=> gives global access to `this.$http.get()` etc
e.g. this.$http.post(url.json) (for Firebase)
- uses Promises

https://github.com/pagekit/vue-resource

#### globally-configure url
`Vue.http.options.root = "your/url"`
- then send anything extra in component, or just an empty string

- or set headers here etc - see github for options

#### intercepting requests
`main.js`
```javascript
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  // log or filter etc then continue on
  next();
});
```
'resources' = 'common mappings to http requests'
this.$resource  - see https://github.com/pagekit/vue-resource/blob/develop/docs/resource.md
