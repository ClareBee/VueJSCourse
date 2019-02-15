### Vue-Router
// main.js
`import VueRouter from 'vue-router';`
`import { routes } from './routes';`
`Vue.use(VueRouter);`
`const route = new VueRouter({
  routes
  });`

`new Vue({
  el: '#app',
  router,
  render: h => h(App)
  });`
---
// routes.js
`import User from './components/user/User.vue';
import Home from './components/home/Home.vue';
export const routes = [
  { path: '', component: Home },
  { path: '/user', component: User },
];`
