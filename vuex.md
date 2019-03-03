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
