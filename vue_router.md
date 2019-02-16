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
---
// components
`<router-view></router-view>`
home route - default on url to # (to get rid of this configure server to serve html files)
`<router-link to="user"><a>Link Name</a></router-link>`
---
// styling routes
`<router-link tag="li" active-class="active" exact>`
