<template>
  <div>
    <h1>The User Page</h1>
    <p>{{ id }}</p>
    <hr>
    <button @click="navigateToHome" class="btn btn-info">Home</button>
  </div>

</template>

<script>
  export default {
    data(){
      return {
        id: this.$route.params.id
      }
    },
    methods: {
      navigateToHome(){
        this.$router.push('/');
      }
    }
  }
</script>
