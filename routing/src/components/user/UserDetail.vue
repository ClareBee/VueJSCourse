<template>
  <div>
    <h3>Some User Details</h3>
    <p>Loaded User: id: {{ $route.params.id }} </p>
    <router-link :to="{ name: 'userEdit', params: { id: $route.params.id }, query: { locale: 'en', q: 100 } }" tag="button" class="btn btn-success">Edit</router-link>
  </div>
</template>
