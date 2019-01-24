<template>
  <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <server-list-item></server-list-item>
      </ul>
  </div>
</template>

<script>
import ServerListItem from './ServerListItem.vue';
export default {
  components: {
    'server-list-item': ServerListItem
  }
}
</script>
