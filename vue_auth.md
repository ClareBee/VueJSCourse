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
    logIn({ commit }){

    }
  },
  getters: {

  }

  })
