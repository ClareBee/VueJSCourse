<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <p v-text="'Some text'"></p>
        <p v-html="'Some text'"></p>
      </div>
      <hr>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custon Directives</h1>
        <p v-highlight:border.delayed="'pink'">Global directive</p>
        <p v-local-highlight.blink="'yellow'">Local directive</p>
        <p v-local-complex-highlight.delayed.blink="{mainColour: 'blue', secondColour: 'purple', delay: '1000'}">More complex directive</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    directives: {
      'local-highlight': {
        bind(el, binding, vnode){
          el.style.color = binding.value;
          if(binding.modifiers['blink']){
            let mainColour = 'green';
            let secondColour = 'red';
            let currentColour = mainColour;
            setTimeout(() => {
              setInterval(() => {
                currentColour == secondColour ? currentColour = mainColour : currentColour = secondColour;
                el.style.backgroundColor = currentColour;
              }, 1000);
            }, 3000);
          }
        }
      },
      'local-complex-highlight': {
        bind(el, binding, vnode){
          if(binding.modifiers['blink']){
            let mainColour = binding.value.mainColour;
            let secondColour = binding.value.secondColour;
            let currentColour = mainColour;
            setTimeout(()=> {
              setInterval(() => {
                currentColour == secondColour ? currentColour = mainColour : currentColour = secondColour;
                el.style.backgroundColor = currentColour;
              }, binding.value.delay);
            }, 1000);
          }
        }
      }
    }
  }
</script>
<style></style>
