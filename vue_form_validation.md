### Form Validation
Vuelidate
`npm install vuelidate --save`
```javascript
import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
```
In Component:
set up a validations object
```javascript
import { required, email } from 'vuelidate/lib/validators';
validations: {
  email: {
    required: required,
    email: email
  }
}
```
on template:
```html
<input
  type="email"
  id="email"
  v-model="email"
  @input="$v.email.$touch()">
