<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ myAge }}</p>
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
  import { eventBus } from '../main';
  export default {
    props: {
      myName: {
        type: String
      },
      resetFn: {
        type: Function
      },
      myAge: {
        type: Number
      }
    },
    methods: {
      switchName(){
        return this.myName.split("").reverse().join("");
      }
    },
    // lifecycle hook & callback
    created() {
      eventBus.$on('ageChanged', (data) => {
        this.myAge = data
      });
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
