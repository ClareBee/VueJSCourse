import Vue from 'vue'
import App from './App.vue'

// example of global directive used a v-highlight
Vue.directive('highlight', {
  bind(el, binding, vnode){
    let delay = 0;
    if (binding.modifiers['delayed']){
      delay = 3000;
    }
    setTimeout(() => {
      el.style.backgroundColor = 'green';
      el.style.color = binding.value;
      if(binding.arg === 'border'){
        el.style.border = `5px solid ${binding.value}`;
      }
    }, delay);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
