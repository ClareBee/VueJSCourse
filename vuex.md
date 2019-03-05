## Vuex
- for central state management
e.g. in `store.js`
```javascript
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    counter: 0
  }
});
```
- then register it on the root object in `main.js`
- use in components - replacing `this.$emit` with `this.$store.store.propertyName`
--
'getters' - state passed as an arg automatically by vuex
also on the store as:
```javascript
getters: {
  doubleCounter: state => {
    return state.counter * 2;
  }
}
```
- accessed in components w `this.$store.getters.doubleCounter`;
also:
```javascript
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters([
    // vuex automatically created computed properties
    // or you pass in object, mapping these to new names
    'doubleCounter', 'stringCounter'
  ])
}
---
Mutations - to change state
mutations: {
  increment: state => {
    state.counter++;
  }
}

this.$store.commit('increment')
```
--
can map mutations to new names w 'mapMutations'
--
on store:
```javascript
actions: {
  methodName: context => {
    context.commit('asyncMutationName');
  }
}
```
