## Vue Conditionals & Lists
`v-if="show"`
`@click="show = !show"`
where `data: { show: true }`
--
`v-if`/`v-else` remove/attach elements (& nested elements) from DOM
`v-else` works on second element if same type to preceding v-if e.g. div/div
`v-else-if`(Vue >2.1.0)
```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```
---
### Alternative v-if syntax
use `v-if` on `<template></template>` to group elements (to avoid side effects that attaching/detaching a `<div>` might cause)
---
`v-show` => doesn't detach, just hides uses css `display: none`

### Lists with v-for
`<li v-for="(item, i) in items">{{ item }} {{ i }}</li>`
### Alternative v-for syntax
use `v-for` directly on `<template>` rather than on `<li>`

### Looping through Objects
```html
<li v-for="item in items">
  <!-- order vital = v, k -->
  <span v-for="(value, key, index) in item">{{ key }}: {{ value }} ({{ index }})</span>
</li>
```
### Lists of numbers
`<span v-for="n in 10">{{ n }}</span`

### Adding a unique key to iterated items
`<li v-for="item in items" :key="item">{{ item }}</li>`
