## Vue
- creates template via Vue instance:
```html
<div id="app">
  <h1 v-once>{{ name }}</h1>
  <!-- interpolation for text only -->
  <p>{{ sayHello() }}</p>
  <!-- using directive for links -->
  <p><a v-bind:href="link">Google</a></p>
  <hr />
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
    finishedLink: '<a href="http://yahoo.com">Yahoo</a>'
  },
  methods: {
    // functions e.g.
    sayHi: function(){
      return this.title;
    }
  }
})
```
### Directives
'Instructions' e.g. `v-bind:href="{property}"` - to pass dynamic attributes to html data
`v-once` = only once, w initial value, not updated subsequently
