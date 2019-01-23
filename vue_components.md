### Components
- reusable elements
```html
<div id="my-app">
  <my-tag-name></my-tag-name>
  <my-tag-name></my-tag-name>
</div>
```
```javascript
Vue.component('my-tag-name', {
  data: function(){
    return {
      name: 'Bob'
    }
  },
  template: '<p>Hello {{ name}}</p>'
});

new Vue({
  el: '#my-app',
});
```
----
Possible to register components 'locally' in a Vue instance:
e.g.
```javascript
let some-component = {
  data: function(){
    return {
      name: "Bob"
    }
  }
}

new Vue({
  el: "#myapp",
  components: some-component
})
```
<some-component> will only be accessible within the myapp div
