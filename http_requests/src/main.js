import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.options.root = "https://vue-example-3d671.firebaseio.com";
Vue.http.interceptors.push((request, next) => {
  console.log('request', request);
  // log or filter etc then continue on
  next(response => {
    console.log('response', response);
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
});
