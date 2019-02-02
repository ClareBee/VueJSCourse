## Directives
e.g. v-bind

### Built in
v-text="'string'"
v-html="'<strong>string</string'" (sanitise output vs xxs attacks)

### Custom
globally registered in main.js
e.g.
Vue.directive('highlight', {
    bind(el, binding, vnode){
      el.style.backgroundColor = 'yellow';
      el.style.color = binding.value;
      if(binding.arg === 'border'){
        el.style.border = "1px solid ${binding.value}";
      }
    }
  });
// used as v-highlight in a component passing in a 'string' to act as a binding.value
// pass an argument w a colon e.g. v-highlight:border => acts as binding.arg
Configured w hooks
// w modifiers
e.g. v-highlight:background.delayed => accessed via binding.modifiers['delayed'] (modifiers can be chained)

1. bind hook (once directive is attached) => takes el, binding, vnode
2. inserted hook (once inserted in parent node) => el, binding, vnode
3. update hook (once component is updated, w/o children) => el, binding, vnode, oldVnode
4. component updated (component updated, w children) => el, binding, vnode, oldVnode
5. unbind (once directive is removed) => el, bindind, vnode


### Registering directives Locally
```javascript
export default {
  directives: {
    'local-highlight': {
      bind(el, binding, vnode){
        el.style.backgroundColor = binding.value;
        if(binding.modifiers['blink']){
          let mainColour = 'green';
          let secondColour = 'red';
          let currentColour = mainColour
          setTimeout(() => {
            setInterval(() => {
              currentColour == secondColour ? currentColour = mainColour : currentColor = secondColour;
            },1000)
          }, 3000)
        }
      }
    }
  }
}
```
used as v-local-highlight="'string'"

### More complex modifiers
