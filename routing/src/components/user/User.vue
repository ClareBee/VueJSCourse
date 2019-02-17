<template>
  <div>
    <h1>The User Page</h1>
    <p>{{ id }}</p>
    <hr>
    <button @click="navigateToHome" class="btn btn-info">Home</button>
    <hr>
    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    methods: {
      navigateToHome(){
        this.$router.push('/');
      }
    }
  }
</script>
