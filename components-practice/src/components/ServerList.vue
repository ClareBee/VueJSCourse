<template>
  <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <server-list-item
          v-for="server in servers"
          :server="server"
          ></server-list-item>
      </ul>
  </div>
</template>

<script>
import ServerListItem from './ServerListItem.vue';
export default {
  data: function(){
    return {
      servers: [
        { id: 1, status: 'normal'},
        { id: 2, status: 'critical'},
        { id: 3, status: 'unknown'},
        { id: 4, status: 'normal'},
      ]
    }
  },
  components: {
    'server-list-item': ServerListItem
  }
}
</script>
