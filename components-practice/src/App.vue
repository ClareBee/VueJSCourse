<template>
    <div class="container">
        <hr>
        <server-status></server-status>
        <hr>
        <server-container></server-container>
        <hr>
        <server-management></server-management>
    </div>
</template>

<script>
  import ServerStatus from './components/ServerStatus.vue';
  import ServerContainer from './components/ServerContainer.vue';
  import ServerManagement from './components/ServerManagement.vue';

  export default {
    components: {
      'server-status': ServerStatus,
      'server-container': ServerContainer,
      'server-management': ServerManagement
    }
  }
</script>

<style>

</style>
