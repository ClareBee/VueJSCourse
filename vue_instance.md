### Vue instance
- data/methods in the constructor (aka options object) have getters/setters (to update DOM etc in case of change => Vue's reactivity system) [n.b. can be stopped with Object.freeze()]
- vue instances can access each other by variable name
- `$el` = template (html code of the instance)
- `$data` = object holding our data properties = accessible from outside
e.g.
```javascript
let age = 23;
let vueInstanceOne = new Vue({
  data: {
    name: 'Bob',
    age: age
    }
  });

console.log(vueInstanceOne.$data)
```

### ref attribute
e.g. `<button v-on:click="show" ref="myButton">Click</button>`
`this.$refs.myButton.innerText = 'Hello World';`
And outside an instance, but doesn't change the code in the constructor (i.e. gets overridden):
`console.log(vueInstanceOne.$refs)`

### Mounting template
- template stored internally => updated as a result of changes to options objects => written to native DOM
- hung off `el: '#app'` OR if no el, then outside the constructor using `.mount()`: `vueInstanceOne.$mount('#app');`
- template can also be written inside the options object:
`template: '<h1>Hello!</h1>'`
(OR append it off an element identified by document.querySelector using .appendChild(vueInstanceOne.$el); OR use Vue.component - tho limitations as templates here are strings)

### Virtual DOM
sits between Vue instance and DOM to track changes

### Vue Instance Lifecycle Hooks
- can be added to options object (on root as functions, not inside methods)
`new Vue()` => `beforeCreate()`[initialize data & events] => `created()`/[Instance created] => compile template/el's template => `beforeMount()` - replace el w compiled template => mount to the DOM => change made? => `beforeUpdate()` => rerender DOM => `beforeDestroy()` => `destroyed()`
