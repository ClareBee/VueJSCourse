### Components
- reusable named Vue instances
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
- <some-component> will only be accessible within the myapp div
- `name ` is produced by a function but still accessible by `this.name` in a method
- methods can be written as functions:
e.g.
```javascript
data: function(){
  return {
    status = 'Critical'
  }
},
methods: {
  changeStatus() {
    this.status = 'Normal';
  }
}
```
Component - <template> with html (wrapped in <div> if > 1) & <script> w export default {}
In `main.js` can import NameOfComponent from `NameOfComponent.vue` (camel case) & register it globally:
`Vue.component('name-of-component', NameOfComponent)`;
=> can now be used as a tag e.g. <name-of-component></name-of-component>
OR can also register things locally = by importing it inside script and adding it to the components section of the options object:
e.g.
```html
<template>
  <app-server-status v-for="server in 5"></app-server-status>
</template>
```
```javascript
<script>
  import ServerStatus from './ServerStatus.vue';
  export default {
    components: {
      'app-server-status': ServerStatus
    }
  }
  </script>
  ```
Note that VueJS allows for camel case or hyphenated selectors (will map camelCase property name in options object to the hyphenated tag name)

----
###  Scoping styles
Add `scoped` to the <style> template (cf shadow DOM) [thanks to data-id- attribute assigned to components]
----
### Passing Props
- data and methods!
parent template `<parent-element :name="name"></parent-element>`
parent Vue instance:
```javascript
export default {
  data: function(){
    return {
      name: 'Bob'
    }
  }
}
```
child template `<p>{{ name }}</p>`
child Vue instance
```javascript
export default {
  props: ['name']
}
```
### Validating Props
Make type explicit in the object
objects/arrays can take default function
e.g.
```javascript
props: {
  name: [String, Array],
  required: true,
}
```
or
```javascript
props: {
  name: {
    type: String
  }
}
```
### Emitting custom events
`this.$emit('nameReset', this.name)`
=> listened to on element via v-on/@ + name of event
e.g.
`@nameReset="name = $event"`
Unidirectional data flow => child components communicate via the parent (cf callbacks & props)

`@click.prevent` - prevents default
`@click.native` - registers click on html but treat it as though it happened on the component
