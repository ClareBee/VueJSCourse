import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import axios from 'axios';
import router from './router';
import store from './store';

Vue.use(Vuelidate);

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/users";
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
