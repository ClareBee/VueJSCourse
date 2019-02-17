<template>
  <div>
    <h3>Some User Details</h3>
    <p>Loaded User: id: {{ $route.params.id }} </p>
    <router-link :to="'/user/' + $route.params.id + '/edit'" tag="button" class="btn btn-success">Edit</router-link>
  </div>
</template>
