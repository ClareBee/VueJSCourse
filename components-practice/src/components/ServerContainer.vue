<template>
  <div class="row">
    <server-list></server-list>
    <server-message></server-message>
  </div>
</template>

<script>
  import ServerList from './ServerList.vue';
  import ServerMessage from './ServerMessage.vue';
  export default {
    components: {
      'server-list': ServerList,
      'server-message': ServerMessage,
    }
  }
</script>
