<template>
  <div>
    <li
      class="list-group-item"
      style="cursor: pointer"
      @click="serverSelected">
        Server #{{ server.id }}
    </li>
  </div>
</template>

<script>
  import { serverEventBus } from '../main';
  export default {
    props: ['server'],
    methods: {
      serverSelected: function(){
        serverEventBus.$emit('serverSelected', this.server);
      }
    }
  }
</script>
