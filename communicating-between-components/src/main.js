import Vue from 'vue'
import App from './App.vue'

// create event bus before loading components
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
});
