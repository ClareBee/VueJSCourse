## VueJS & the DOM

- creates template via Vue instance:

```html
<div id="app">
  <h1 v-once>{{ name }}</h1>
  <!-- interpolation for text only -->
  <p>{{ sayHello() }}</p>
  <!-- using directive for links -->
  <p><a v-bind:href="link">Google</a></p>
  <button v-on:click="increase">Click me</button>
  <p>{{ counter }}</p>
  <hr />
  <p v-on:mousemove="getCoordinates">Coordinates: {{ x }}/{{ y }}</p>
  <!-- careful of this cf dangerously set innerHTML -->
  <p v-html="finishedLink"></p>
</div>
```
```javascript
new Vue({
  el: '#app',
  data: {
    // variables e.g.
    name: 'Clare',
    title: 'Hi',
    link: 'http://google.com',
    finishedLink: '<a href="http://yahoo.com">Yahoo</a>',
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    // functions e.g.
    sayHi: function(){
      return this.title;
    },
    increase: function(){
      return this.counter++;
    },
    getCoordinates: function(event){
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
})
```
### Directives
'Instructions' e.g. `v-bind:href="{property}"` - to pass dynamic attributes to html data
`v-once` = only once, w initial value, not updated subsequently
`v-on:click="{function name}"`/ `v-on:mousemove="{function name}"` cf event listeners
Use keyword `$event` if referencing event in template

### Event Modifiers
`v-on:mousemove.stop=""` == `event.stopPropagation()`
`v-on:click.prevent=""` == `event.preventDefault()` (prevents reload)

`.stop`
`.prevent`
`.capture`
`.self` (for element itself, not child element)
`.once`
`.passive`

- Chainable (order matters)

### Keyboard Events & Modifiers
`v-on:keyup="{function name}"`
`v-on:keyup.enter="{function name}"` => modifies it just for enter key

`.tab`
`.delete` (captures both “Delete” and “Backspace” keys)
`.esc`
`.space`
`.up`
`.right`
`.left`
`.down`

### JS in templates
- for one statement only and no `if` statements (ternary ok)
e.g. {{ counter * 2 }}

### Two-way Data Binding w v-model directive
`v-model={name of property}`
e.g.
```html
<input type="text" v-model="name">
<p>{{ name }}</p>
```
```javascript
new Vue({
  el: "#app",
  data: {
    name: "clare"
  }
});
```
### Computed property
- a property cf data, executes function only whenever any data property that it is dependent on is changed (synchronous)

### Watch object
- name a property that you want to watch, then describe function to run if property changes
- less optimized than computed properties, but better suited to asynchronous tasks

### Shorthands
`v-on:click` === `@click`
`v-bind:href` === `:href`

### Dynamic Styling
`@click="booleanDataProperty != booleanDataProperty"`
`:class="{`css-class-name`: booleanDataProperty }"`
Or move it into computed property
Class name or object (key-value = class-condition)
Also `:class="[...array of classes]"`
Inline style `:style="{backgroundColor: myColour}"`
