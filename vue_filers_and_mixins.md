### Filters
- functions help transform output in the template (not the data itself)
- always take value as param
- global in main.js:
```javascript
Vue.filter('to-lowercase', function(value){
  return value.toLowerCase();
});
```
- local in component:
```javascript
filters: {
  toUpperCase(value){
    return value.toUpperCase();
  }
}
```
use w pipe => `<p>{{ text | toUpperCase }}</p>`
chaining filters `<p>{{ text | toUpperCase | to-lowercase }}</p>`

### Computed Properties
- e.g. in for loops filters would be sub-optimal in terms of performance
- use computed properties instead
e.g. filtering lists
```javascript
computed: {
  filteredFruits(){
    return this.fruits.filter((element) => {
      return element.match(this.filterText);
    });
  }
}
```
