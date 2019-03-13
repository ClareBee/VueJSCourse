<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Users:</p>
    <ul>
      <li v-for="user in users">{{user.email}}</li>
    </ul>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    data(){
      return {
        users: []
      }
    },
    created(){
      axios.get()
        .then(res => {
          console.log(res);
          const data = res.data;
          this.users = data;
        })
        .catch(error => console.log(error))
    }
  }
</script>
<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>
