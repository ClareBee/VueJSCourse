<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Age: {{ myAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
  import { eventBus } from '../main';

  export default {
    props: ['myAge'],
    methods: {
      editAge: function(){
        this.myAge = 30;
        // this.$emit('ageChanged', this.myAge);
        eventBus.$emit('ageChanged', this.myAge);
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
