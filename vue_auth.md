### Auth in SPAs
SPA (API key) -> Server (stateless, RESTful API) -> [token] -> SPA (store token on localStorage) -> [token] -> Server

e.g. w Firebase:
### Sign up
post request: email, password, returnSecureToken (true)
(not auth headers, but using api key as query
response: email, expiresIn, idToken, kind, localId, refreshToken

### Sign in
post request: email, password, returnSecureToken (true)
response: as above, w registered: true

### with Vuex
```
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {

  },
  actions: {
    <!-- commit for mutations -->
    signUp({ commit }, authData){
      <!-- post request  -->
    },
    logIn({ commit }, authData){
      <!-- login request  -->
    }
  },
  getters: {

  }
});
```
dispatch actions from component, e.g. on submit:
`this.$store.dispatch('signUp', {email: formData.email, password: formData.password })`
`this.$store.dispatch(logIn)`
---
add mutation to store auth
```
mutations: {
  authUser(state, userData){
    state.idToken = userData.token,
    state.userId = userData.userId
  }
}
```
userData from the then block of the sign up post request:
```
.then(res => {
  commit('authUser', {
    token: res.data.idToken,
    userId: res.data.localId
    })
  })
  ```
  JWT = https://jwt.io/
  RFC 7519
  ---
  can save user data via a post request to Firebase
  then we can user token for auth in get requests, eg fetch user
  Firebase accepts this as a query param 'auth?='
  dispatch this in a created() hook,
  e.g. dispatch('storeUser', authData)
  storeUser adds user to State, getter makes it accessible in components

  ---
  can check store to guard routes:
  ```
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter(to, from , next) {
      if(store.state.idToken){
        next()
      } else {
        next('/signin')
      }
    }
  }
  ```
  --
  isAuthenticated getter in store - can be accessed via computed properties in components: this.$store.getters.isAuthenticated
  - can use v-if to show links/logout button if authenticated
  - logout should clear token from state & router.replace('/signIn') to redirect
  - setTimeout to logout when session token expires
  
