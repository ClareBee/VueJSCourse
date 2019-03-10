<template>
  <div>
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>
<script>
  import Stock from './Stock.vue';
  export default {
    components: {
      appStock: Stock
    },
    computed: {
      stocks: function() {
        console.log('store', this.$store)
        return this.$store.getters.stocks;
      }
    }
  }
</script>
