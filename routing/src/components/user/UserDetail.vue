<template>
  <div>
    <h3>Some User Details</h3>
    <p>Loaded User: id: {{ $route.params.id }} </p>
    <router-link
      :to="link"
      tag="button"
      class="btn btn-success">Edit</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        link: {
          name: 'userEdit',
          params: { id: this.$route.params.id },
          query: { locale: 'en', q: 100 },
          hash: '#data'
        }
      }
    }
  }
</script>
