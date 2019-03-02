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
---
// via js in script tags
this.$router.push('/nameofroute') (pushes route onto stack - link to click listener)
---
// route params
e.g. `/user/:id`
accessible via this.$route.params.id
--
set up watcher to see if route changes:
`watch: {
  '$route'(to, from){
    this.id = to.params.id
  }
}`
=> no longer needed in vue-router v.2.2 as can bind params to props
---
nested params:
`export const routes = [
  { path: '', component: Home },
  { path: '/user', component: User, children: [
    { path: '', component: UserStart },
    { path: ':id', component: UserDetail },
    { path: ':id/edit', component: UserEdit, name: 'userEdit' }
  ] },
];`
---
named routes
on route = name: 'userEdit'
on component =     
`<router-link :to="{ name: 'userEdit', params: { id: $route.params.id }, query: {locale: 'en', q: 100 } }" tag="button" class="btn btn-success">Edit</router-link>`
---
accessing query = $route.query.propertyName
---
multiple routes -
```javascript
{ path: '/', name: 'home', components: {
  default: Home,
  'header-top': Header
  }}
```
---
redirection:
`{ path: '/redirect-me', redirect: '/user'}`
---
wildcard routes:
`{ path: '*', redirect: '/'}`
--
passing hash along w params/query
e.g. `hash: '#hashName'`
--
controlling scroll
in main.js
scrollBehavior inside router:
```javascript
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition;
    }
    if(to.hash) {
      return {selector: to.hash};
    }
    return {x: 0, y: 0};
  }
});
```
---
guards:
(gets executed on each router action - i.e. generic checks)
e.g. `router.beforeEach((to, from, next) => {
    console.log('global beforeEach');
    next();
  })`
---
next() - also accepts false (to stay on page), a route e.g. '/user'/object defining the path
- can also put `beforeEach` onto the route itself
- or in the component itself as `beforeRouteEnter(to, from, next)` as a lifecycle hook
- `beforeRouteLeave()` inside the component as lifecycle hook
