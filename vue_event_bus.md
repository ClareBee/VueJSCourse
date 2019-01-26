## Vue event bus
Centralised event store - bypasses the child-parent-child route
If things get more complex = use VueX for better state management
---
In `main.js`:
```javascript
// create event bus before loading components
export const eventBus = new Vue();
```
Import `{ eventBus }` in components you want to connect.
`eventBus.$emit('nameOfEvent', dataToBeEmitted)`
In receiving component's options object:
```javascript
// lifecycle hook & callback
created() {
  eventBus.$on('nameOfEvent', (data) => {
    this.variableName = data
  });
}
```
### centralise code in main.js
Also possible to register events on the event bus in main.js
```javascript
export const eventBus = new Vue({
  methods: {
    nameOfFunction(dataToPass){
      this.$emit('nameofEvent', dataToPass)
    }
  }

});
```
