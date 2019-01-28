### slots
can wrap any templates/components
=> distributes parent content inside child components
- data managed in parent, style in child/or parent
=> useful for widgets etc.

### named slots
In child:
```html
<slot name="title"></slot>
<slot name="content"></slot>
```
In parent:
```html
<custom-component>
  <h2 slot="title">{{ title }}</h2>
  <p slot="content">{{ content }}</p>
</custom-component>
```
Unnamed slots treated as default

### Dynamic Components
`<component :is="selectedComponent"></component>`
where selectedComponent is a string data property that matches the selector of the component to load
- wrap it in `<keep-alive></keep-alive>` to preserve state
- lifecycle hooks: deactivated() + activated()
