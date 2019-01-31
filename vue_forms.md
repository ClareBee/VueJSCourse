### Forms
- 2-way data binding with data object & v-model
- includes ability to nest e.g. userData: { name: ''}
- setting value in data object pre-populates the related input field

### Input Modifiers
v-model.lazy = only reacts to change event, rather than every keystroke
.trim - to get rid of whitespace
.number - to force into number

### Text Area
- use 'whitespace: pre;' css to keep display of line breaks
- content belongs in data object

### Others
- values of checkboxes can be added to an array - bind them to same v-model data property set to array
- radio buttons - also share same v-model but not as array
- select = array of options then loop through <option v-for="option in options" :selected="option == 'UK'">{{ option }}</option>
then bind on the select: <select v-model="selectedPriority">
